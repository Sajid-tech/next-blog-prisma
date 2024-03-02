import prisma from "@/connect"
import { getAuthSession } from "@/utils/auth";
import { NextResponse } from "next/server"


export const GET = async (req) => {

    const { searchParams } = new URL(req.url);

    const page = searchParams.get("page");
    const cat = searchParams.get("cat");

    const POST_PER_PAGE = 3;

    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        where: {
            ...(cat && { catSlug: cat }),
        },
    };

    // by using $transaction u you can use many query inside it 
    try {
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({ where: query.where }),
        ]);

        return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }))

    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }, { status: 500 }))
    }
}

// create  a post 

export const POST = async (req) => {
    const session = await getAuthSession()

    if (!session) {
        return new NextResponse(
            JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
        );
    }

    try {
        const body = await req.json();
        const post = await prisma.post.create({
            data: { ...body, userEmail: session.user.email },
        });

        return new NextResponse(JSON.stringify(post, { status: 200 }));
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
};
