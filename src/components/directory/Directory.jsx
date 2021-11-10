import React, { Component } from 'react'
import { MenuItem } from '../menu-item/MenuItem';
export default class Directory extends Component {
    constructor() {
        super();
        this.state = {
            section: [
                {
                    id: 1,
                    title: "Hats",
                    imageUrl:"https://images.pexels.com/photos/849835/pexels-photo-849835.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                }, {
                    id: 2,
                    title: "Cat",
                    imageUrl:"https://images.pexels.com/photos/7741769/pexels-photo-7741769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                }, {
                    id: 3,
                    title: "Women",
                    imageUrl:"https://images.pexels.com/photos/719609/pexels-photo-719609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                }, {
                    id: 4,
                    title: "Man",
                    size: "large",
                    imageUrl:"https://images.pexels.com/photos/413195/pexels-photo-413195.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                }, {
                    id: 5,
                    title: "Children",
                    size:"large",
                    imageUrl:"https://images.pexels.com/photos/96627/pexels-photo-96627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                },
            ]
        }
    }
    render() {
        return (
            <div className="directory-menu">
                {this.state.section.map(({id,title,imageUrl,size})=>{
                   return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                })}

            </div>
        )
    }
}
