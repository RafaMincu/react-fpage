import React from 'react'
import MetaTags from 'react-meta-tags';
import Header from '../routes/Header'
import Footer from '../routes/Footer'

const about = () => {
    return (
        <div>
            <MetaTags>
                <title>Boost Web Design | About</title>
            </MetaTags>
            <Header />
            <section id="main">
                <div class="container">
                    <article id="main-col">
                        <h1 class="page-title">About Us</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis tenetur sapiente dignissimos ex voluptates quos quidem sed molestias fuga molestiae, asperiores ad numquam, nostrum nulla inventore? Veritatis maxime delectus ipsam labore neque magnam, aliquid, aspernatur placeat maiores, ratione nam alias aut sequi est! Harum illum dignissimos recusandae dolore expedita iste. ipsum dolor sit amet, consectetur adipisicing elit. Quo blanditiis dolores eum quasi dolorem, ullam in repellendus. Ipsum sit porro impedit rerum hic atque autem numquam aspernatur a? Nam in ab libero, quidem deleniti similique voluptatem corrupti esse porro laudantium labore doloremque aspernatur, cupiditate suscipit dolor, consequatur rem ad sunt..</p>
                        <p class="dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo maxime, nobis rerum nam minus deleniti, vel quis possimus repellat veniam incidunt iure porro molestias voluptas! Veniam eveniet temporibus sequi voluptas, odio unde blanditiis eum exercitationem distinctio obcaecati quaerat, totam nisi inventore, rem pariatur. Obcaecati assumenda quasi ratione, consectetur id quod? ipsum dolor sit amet consectetur adipisicing elit. Dicta recusandae porro esse officiis aspernatur nihil praesentium voluptatum cupiditate distinctio, architecto sunt placeat itaque similique modi nisi corrupti? Explicabo, perferendis eius minima, eligendi saepe ipsum voluptates veniam vero dolorem quasi impedit?, ipsum dolor sit amet consectetur adipisicing elit. Quos, enim?</p>
                    </article>

                    <aside id="sidebar">
                        <div class="dark">
                            <h3>What We Do</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quaerat.</p>
                        </div>
                    </aside>
                </div>
            </section>
            <Footer />  
        </div>
    )
}

export default about
 