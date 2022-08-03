function Page(){
    const link="https://www.nykaa.com/brands/kay-beauty/c/11433"
    return(
        <div>
            
            <h3>Kayyy</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkWiNz_bEtdmTB-2GAhP3lrFbZvIFTjTCirw&usqp=CAU" alt="Girl with a jacket"></img>
            <p>Buy anything Everything is 25% Off</p>
                <p>List of Cosmetics Availbale</p>
                <ol>
                <li>lipstick</li>
                <li>Concealer</li>
                <li>Foundation</li>
                </ol>

            <p>The Actress And Entrepreneur On Her Birthday Plans, The Newly Launched Gel Eye Pencils By Kay Beauty And More!</p>
            <a href={link}>Click here to know more</a><br></br>
        </div>
    )
    }

    function SectionFooter(){
        const link="https://lakme.com/es/"
        return(
            <div>
                <h3>Lakmee</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8OXnYNK8emlsnGF6INbp2bf544oC6XmJb-A&usqp=CAU" alt="Brush with a stick"></img>
                <footer>
                <p>Lakmé is an Indian cosmetics brand, owned by Hindustan Unilever. It was named after the French opera Lakmé, which itself is the French word for goddess Lakshmi who is renowned for her beauty.</p>
                <p>Buy anything Everything is 25% Off</p>
                <p>List of Cosmetics Availbale</p>
                <ol>
                <li>lipstick</li>
                <li>Concealer</li>
                <li>Foundation</li>
                </ol>
                <a href={link}>Click here to know more</a><br></br>

                </footer>
    
            </div>
        )
    }
    export default Page;
    export{SectionFooter}
