import { NextResponse } from "next/server";
import {posts} from './posts';

export async function GET(req: Request){
    return NextResponse.json(posts)
}

export async function POST(req: Request){
    const body = await req.json()

    console.log(body) // выведется в серверную консоль
    return NextResponse.json({body})
}

// запросы выполнятся по адресам http://localhost:3000/api/posts можно увидеть в Postman