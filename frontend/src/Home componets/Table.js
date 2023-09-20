import React from "react";

export default function Table() {
    return(
        <div className="table-container">
            <table id="example" class="table table-striped" style={{width:'100%'}}>
                <thead>
                    <tr>
                        <th className="sr">SrNo</th>
                        <th className="probSt">Problem statement</th>
                        <th className="category">Category</th>
                        <th className="domain">Domain</th>
                        <th className="det">Deatils</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minus assumenda vel neque facilis commodi saepe corrupti quod consequuntur iure eaque, tenetur reprehenderit architecto! Vero nobis architecto distinctio itaque vitae.</p></td>
                        <td>Software</td>
                        <td>Web Development</td>
                        <td>show
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et quas tempore, necessitatibus cupiditate dolorem voluptatibus est possimus quasi delectus explicabo vitae quisquam ducimus iste rerum perferendis veniam quos quidem neque.</p></td>
                        <td>Harware</td>
                        <td>Web Development</td>
                        <td>show</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nam delectus amet vel ducimus dolorum, tempora impedit! Eaque ipsam consectetur consequuntur explicabo in at quibusdam magni veritatis cupiditate excepturi. Sint.</p></td>
                        <td>Software</td>
                        <td>Android Development</td>
                        <td>show</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas obcaecati odio, tenetur provident magni quas eaque ut nulla modi ipsam laudantium mollitia architecto delectus beatae? Impedit eum similique quo corrupti!</p></td>
                        <td>Hardware</td>
                        <td>ML</td>
                        <td>show</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab saepe earum magnam provident nemo animi in, voluptatem veniam nostrum similique consequatur, debitis obcaecati modi praesentium doloremque quisquam doloribus quia eum.</p></td>
                        <td>Software</td>
                        <td>IoT</td>
                        <td>show</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}