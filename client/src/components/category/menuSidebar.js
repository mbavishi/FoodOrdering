import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MenuSidebar = (props) => {
    const menuItems = [
        {
            "category_id": "1",
            "category_name": "Appetizers",
            "description": "Start your meal with our delicious appetizers.",
            "status": "active",
            "items": [
                "Bruschetta", "Caprese Salad", "Spring Rolls", "Stuffed Mushrooms", "asad", "adada", "aad"
            ]
        },
        {
            "category_id": "2",
            "category_name": "Main Courses",
            "description": "Satisfy your hunger with our flavorful main courses.",
            "status": "active",
            "items": [
                "Vegetable curry", "Grilled salmon", "Lasagna", "mixed vegetable"
            ]
        },
        {
            "category_id": "3",
            "category_name": "Desserts",
            "description": "Indulge your sweet tooth with our delightful desserts.",
            "status": "active",
            "items": [
                "Bruschetta", "Capresealad", "SpringRolls", "StuffedMushrooms"
            ]
        },
        {
            "category_id": "4",
            "category_name": "Beverages",
            "description": "Quench your thirst with our refreshing beverages.",
            "status": "active",
            "items": [
                "Bruschetta", "Capresealad", "SpringRolls", "StuffedMushrooms"
            ]
        },
        {
            "category_id": "5",
            "category_name": "Wraps",
            "description": "Start your meal with our delicious appetizers.",
            "status": "active",
            "items": [
                "Bruschetta", "Capresealad", "SpringRolls", "StuffedMushrooms"
            ]
        },
        {
            "category_id": "6",
            "category_name": "Sandwiches",
            "description": "Start your meal with our delicious appetizers.",
            "status": "active",
            "items": [
                "Bruschetta", "Capresealad", "SpringRolls", "StuffedMushrooms"
            ]
        },
        {
            "category_id": "7",
            "category_name": "Noodles",
            "description": "Start your meal with our delicious appetizers.",
            "status": "active",
            "items": [
                "Bruschetta", "Capresealad", "SpringRolls", "StuffedMushrooms"
            ]
        },
        {
            "category_id": "8",
            "category_name": "Specials",
            "description": "Explore our chef's special creations.",
            "status": "active",
            "items": [
                "Bruschetta", "Capresealad", "SpringRolls", "StuffedMushrooms"
            ]
        }
    ];

    const handleClick = (item) => {
        props.onCategoryClick(item);
    }


    return (
        <div className='menusidebar'>
            <ul>
                {menuItems.map(item => (
                    <li key={item.category_id} onClick={() => handleClick(item)}>
                        <h3>{item.category_name}</h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MenuSidebar;