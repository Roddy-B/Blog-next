
import Post from './../Posts/index';

export default function Article(){
    return(
        <section className="container w-[1200px] m-auto text-white mt-4">
            <h3 className="text-5xl font-light">Article</h3>
            <div className=" mt-12 flex ">
                <Post />
                <Post />
                <Post />
            </div>
        </section>
    )
}