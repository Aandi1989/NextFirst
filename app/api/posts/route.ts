import { NextResponse } from "next/server";
import {posts} from './posts';

export async function GET(req: Request){
    const { searchParams } = new URL(req.url)
    const query = searchParams.get('q');
    let currentPosts = posts;
    if(query){
        currentPosts = posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }
    return NextResponse.json(currentPosts)
}

export async function POST(req: Request){
    const body = await req.json()

    console.log(body) // выведется в серверную консоль
    return NextResponse.json({body})
}

// запросы выполнятся по адресам http://localhost:3000/api/posts можно увидеть в Postman