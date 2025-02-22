
import Image from 'next/image';

export default function Post(){
    return(
        <div className="mx-2">
            <Image
                src="/next.png"
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <h5 className="text-base font-light uppercase tracking-wider text-blue-400">Tecnologia</h5>
            <h3 className="text-4xl font-light">O guia definitivo do Blog</h3>
            <p className="text-gray-400">
                Optimize your images: 
                Images are often large files that can take a long time
                 to load and consume a lot of bandwidth. 
                 Next.js can optimize your images by resizing 
                 them to fit the device screen size, 
                 compressing them to reduce their file size, 
                 and lazy-loading them to only load them 
                 when they are visible on the screen. 
                 This can improve the loading speed, 
                 reduce the data usage, and prevent layout shifts caused by images.
            </p>
            <div className="flex pt-3">
                <div className="profile size-[56px] bg-slate-600 rounded-full"></div>
                <div className="ml-2">
                    <h6 className="text-blue-400">Fulano de tal</h6>
                    <p className="text-gray-400">Fev 22, 2025 - 10 min read</p>
                </div>
            </div>
        </div>
    )
}