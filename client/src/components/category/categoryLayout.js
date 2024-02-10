import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appetizers1 from '../../assets/images/Appetizers1.jpg';
import Appetizers2 from '../../assets/images/Appetizers2.jpg';
// import Appetizers2 from '../../assets/images/Appetizers2.jpg';
// import Appetizers2 from '../../assets/images/Appetizers2.jpg';
// import Appetizers2 from '../../assets/images/Appetizers2.jpg';
// import Appetizers2 from '../../assets/images/Appetizers2.jpg';
// import Appetizers2 from '../../assets/images/Appetizers2.jpg';
// import Appetizers2 from '../../assets/images/Appetizers2.jpg';
// import Appetizers2 from '../../assets/images/Appetizers2.jpg';
// import Appetizers2 from '../../assets/images/Appetizers2.jpg';
// import Appetizers2 from '../../assets/images/Appetizers2.jpg';
// import Appetizers2 from '../../assets/images/Appetizers2.jpg';
// import Appetizers2 from '../../assets/images/Appetizers2.jpg';

const menuItems = [
    {
        "category_id": "1",
        "category_name": "Appetizers",
        "description": "Start your meal with our delicious appetizers.",
        "status": "active",
        "items": [
            {
                "name": "Spinach Artichoke Dip",
                "description": "Creamy blend of spinach, artichokes, and cheese, served with tortilla chips.",
                "image": Appetizers1
            },
            {
                "name": "Buffalo Wings",
                "description": "Crispy chicken wings tossed in spicy buffalo sauce, served with celery sticks and blue cheese dressing.",
                "image": Appetizers2
            },
            {
                "name": "Mozzarella Sticks",
                "description": "Breaded mozzarella cheese sticks, fried until golden brown, served with marinara sauce.",
                "image": "../../assets/images/Appetizers1.jpg"
            }
        ]
    },
    {
        "category_id": "2",
        "category_name": "Main Courses",
        "description": "Satisfy your hunger with our flavorful main courses.",
        "status": "active",
        "items": [
            {
                "name": "Grilled Salmon",
                "description": "Fresh Atlantic salmon fillet, grilled to perfection, served with seasonal vegetables and rice.",
                "image": "../../assets/images/Appetizers1.jpg"
            },
            {
                "name": "Chicken Alfredo",
                "description": "Grilled chicken breast served on a bed of fettuccine pasta tossed in creamy Alfredo sauce.",
                "image": "../../assets/images/Appetizers1.jpg"
            },
            {
                "name": "Classic Burger",
                "description": "Juicy beef patty topped with lettuce, tomato, onion, and your choice of cheese, served with fries.",
                "image": "../../assets/images/Appetizers1.jpg"
            }
        ]
    },
    {
        "category_id": "3",
        "category_name": "Desserts",
        "description": "Indulge your sweet tooth with our delightful desserts.",
        "status": "active",
        "items": [
            {
                "name": "New York Cheesecake",
                "description": "Rich and creamy cheesecake on a graham cracker crust, topped with strawberry compote.",
                "image": "../../assets/images/Appetizers1.jpg"
            },
            {
                "name": "Chocolate Lava Cake",
                "description": "Warm chocolate cake with a molten chocolate center, served with vanilla ice cream.",
                "image": "../../assets/images/Appetizers1.jpg"
            },
            {
                "name": "Tiramisu",
                "description": "Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.",
                "image": "../../assets/images/Appetizers1.jpg"
            }
        ]
    },
    {
        "category_id": "4",
        "category_name": "Beverages",
        "description": "Quench your thirst with our refreshing beverages.",
        "status": "active",
        "items": [
            {
                "name": "Iced Tea",
                "description": "Classic iced tea served with lemon wedges and sweetened to perfection.",
                "image": "../../assets/images/Appetizers1.jpg"
            },
            {
                "name": "Mojito",
                "description": "Refreshing cocktail made with white rum, fresh mint, lime juice, and soda water.",
                "image": "../../assets/images/Appetizers1.jpg"
            },
            {
                "name": "Strawberry Smoothie",
                "description": "Blend of fresh strawberries, yogurt, and honey, served chilled.",
                "image": "../../assets/images/Appetizers1.jpg"
            }
        ]
    },
    {
        "category_id": "5",
        "category_name": "Wraps",
        "description": "Delicious wraps for a quick and satisfying meal.",
        "status": "active",
        "items": [
            {
                "name": "Chicken Caesar Wrap",
                "description": "Grilled chicken, romaine lettuce, Parmesan cheese, and Caesar dressing wrapped in a flour tortilla.",
                "image": "../../assets/images/Appetizers1.jpg"
            },
            {
                "name": "Vegetable Hummus Wrap",
                "description": "Mixed vegetables, hummus, and feta cheese wrapped in a whole wheat tortilla.",
                "image": "../../assets/images/Appetizers1.jpg"
            },
            {
                "name": "Buffalo Chicken Wrap",
                "description": "Crispy chicken tenders tossed in buffalo sauce, lettuce, tomato, and ranch dressing wrapped in a tortilla.",
                "image": "../../assets/images/Appetizers1.jpg"
            }
        ]
    },
    {
        "category_id": "6",
        "category_name": "Sandwiches",
        "description": "Satisfying sandwiches for any appetite.",
        "status": "active",
        "items": [
            {
                "name": "Turkey Club Sandwich",
                "description": "Sliced turkey breast, bacon, lettuce, tomato, and mayonnaise on toasted bread.",
                "image": "../../assets/images/Appetizers1.jpg"
            },
            {
                "name": "Grilled Vegetable Panini",
                "description": "Grilled zucchini, bell peppers, onions, and provolone cheese on ciabatta bread.",
                "image": "../../assets/images/Appetizers1.jpg"
            },
            {
                "name": "BLT Sandwich",
                "description": "Crispy bacon, lettuce, tomato, and mayonnaise on toasted bread.",
                "image": "../../assets/images/Appetizers1.jpg"
            }
        ]
    },
    {
        "category_id": "7",
        "category_name": "Noodles",
        "description": "Delicious noodle dishes for pasta lovers.",
        "status": "active",
        "items": [
            {
                "name": "Spaghetti Bolognese",
                "description": "Spaghetti pasta topped with homemade Bolognese sauce and grated Parmesan cheese.",
                "image": "../../assets/images/Appetizers1.jpg"
            },
            {
                "name": "Pad Thai",
                "description": "Traditional Thai stir-fried rice noodles with shrimp, tofu, bean sprouts, and peanuts.",
                "image": "../../assets/images/Appetizers1.jpg"
            },
            {
                "name": "Fettuccine Carbonara",
                "description": "Fettuccine pasta tossed in a creamy sauce with crispy bacon, Parmesan cheese, and black pepper.",
                "image": "../../assets/images/Appetizers1.jpg"
            }
        ]
    },
    {
        "category_id": "8",
        "category_name": "Specials",
        "description": "Explore our chef's special creations.",
        "status": "active",
        "items": [
            {
                "name": "Seafood Paella",
                "description": "Traditional Spanish rice dish with a mix of seafood, saffron, and vegetables.",
                "image": "../../assets/images/Appetizers1.jpg"
            },
            {
                "name": "Prime Rib",
                "description": "Slow-roasted prime rib served with au jus, mashed potatoes, and seasonal vegetables.",
                "image": "../../assets/images/Appetizers1.jpg"
            },
            {
                "name": "Vegetable Curry",
                "description": "Spicy Indian curry made with mixed vegetables, coconut milk, and aromatic spices, served with basmati rice.",
                "image": "../../assets/images/Appetizers1.jpg"
            }
        ]
    },
    {
        "category_id": "9",
        "category_name": "Salads",
        "description": "Fresh and healthy salads for a light meal.",
        "status": "active",
        "items": [
            {
                "name": "Greek Salad",
                "description": "Crisp lettuce, tomatoes, cucumbers, olives, onions, feta cheese, and Greek dressing.",
                "image": "../../assets/images/Appetizers1.jpg"
            },
            {
                "name": "Cobb Salad",
                "description": "Mixed greens topped with grilled chicken, avocado, bacon, hard-boiled eggs, tomatoes, and blue cheese dressing.",
                "image": "../../assets/images/Appetizers1.jpg"
            },
            {
                "name": "Caesar Salad",
                "description": "Romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.",
                "image": "../../assets/images/Appetizers1.jpg"
            }
        ]
    },
    {
        "category_id": "10",
        "category_name": "Kids Menu",
        "description": "Kid-friendly meals for our youngest guests.",
        "status": "active",
        "items": [
            {
                "name": "Chicken Nuggets",
                "description": "Crispy chicken nuggets served with fries and ketchup.",
                "image": "../../assets/images/Appetizers1.jpg"
            },
            {
                "name": "Cheese Pizza",
                "description": "Classic cheese pizza topped with marinara sauce and melted mozzarella cheese.",
                "image": "../../assets/images/Appetizers1.jpg"
            },
            {
                "name": "Peanut Butter & Jelly Sandwich",
                "description": "Creamy peanut butter and strawberry jelly sandwiched between slices of white bread.",
                "image": "../../assets/images/Appetizers1.jpg"
            }
        ]
    }
];

const CategoryLayout = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleClick = (item) => {
        setSelectedCategory(item);
    }

    return (
        <div className='row menu'>
            <div className='col-3 sidemenu'>

                {/* <MenuSidebar onCategoryClick={handleCategoryClick} /> */}
                <div className='menusidebar'>
                    <ul>
                        {menuItems.map(item => (
                            <li className='menu-list-items' key={item.category_id} onClick={() => handleClick(item)}>
                                <a href={`#${item.category_name}`}>{item.category_name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='col-9 content-menu'>
                {menuItems.map((item, index) => (
                    item && (
                        <div key={index} id={item.category_name}>
                            <h1 className='text-red'>{item.category_name}</h1>
                            <p>{item.description}</p>
                            <div className='card-container'>
                                {item.items.map((item, index) => (
                                    <>
                                        <Card key={index} style={{ width: '18rem', margin: '10px' }}>
                                            <Card.Img variant="top" src={item.image} style={{ height: "18rem" }} />
                                            <Card.Body>
                                                <Card.Title>{item.name}</Card.Title>
                                                <Card.Text>
                                                    {item.description}
                                                </Card.Text>
                                                <button className='btn-red'>ADD</button>
                                            </Card.Body>
                                        </Card>
                                    </>
                                ))}
                            </div>
                        </div>
                    )
                ))}
                {/* {props.children} */}
            </div>
        </div>
    )
}

export default CategoryLayout