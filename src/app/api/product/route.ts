
import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        title: "Nike Air Max Alpha",
        price: 1000000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/927d3fef-0657-4b82-8b3a-b34f07ffdd28/pegasus-41-road-running-shoes-RZm89S.png",
    },
    {
        id: 2,
        title: "Nike Air Trainer",
        price: 500000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/erzfadfpnzgkxt0gn2ya/air-max-plus-shoes-Z0D37G.png",
    },
    {
        id: 3,
        title: "Nike V2K Run",
        price: 1500000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0dbef9d2-e69b-4df8-b52f-4e679d20e486/air-max-alpha-trainer-5-workout-shoes-x8Jzj6.png",
    },
    {
        id: 4,
        title: "Nike Air Max Porse Lioms",
        price: 1500000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7f453619-59c1-46fd-b3ab-47f7beba230d/air-max-pulse-roam-shoes-9bnsRG.png",
    },
    {
        id: 5,
        title: "Nike Air Max Porse",
        price: 1500000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7f453619-59c1-46fd-b3ab-47f7beba230d/air-max-pulse-roam-shoes-9bnsRG.png",
    }
    
]

// connect database non firebase

// export async function GET(request: NextRequest) {
//     // console.log(request);
//     const {searchParams} = new URL(request.url);
//     const id = searchParams.get('id');
//     console.log(id)

// if(id) {
//     const detailProduct = data.find((item)=> item.id === Number(id) )
//     if(detailProduct) {
//         return NextResponse.json({sFtatus:200, message:"success", data: detailProduct})
//     }
//     return NextResponse.json({status:404, message:"Not Found", data: {}})
// }

//     return NextResponse.json({status:200, message:"success", data: data})
// }


//connect database firebase
export async function GET(request: NextRequest) {
    // console.log(request);
    const {searchParams} = new URL(request.url);
    const id = searchParams.get('id');
    // console.log(id)

if(id) {
    const detailProduct = await retrieveDataById('products',id)
    if(detailProduct) {
        return NextResponse.json({sFtatus:200, message:"success", data: detailProduct})
    }
    return NextResponse.json({status:404, message:"Not Found", data: {}})
}
    const products = await retrieveData('products')
    return NextResponse.json({status:200, message:"success", data: products})
}