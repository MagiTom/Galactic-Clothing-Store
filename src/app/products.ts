export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string; 
  category:string;
  size: string;
  color: string;
  number:number;
}


export const productsForMan = [
    {
      id: 1,
      name: "Man's T-shirt - Stars1",
      price: 28,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageUrl: "../../../assets/img/shop_product1.jpg",
      category: "Man",  
      size: "One Size",
      color: "Green",
      number: 1
    },
    {
      id: 2,
      name: "Man's T-shirt - Stars2",
      price: 30,
      description: 'Nulla pharetra diam sit amet nisl. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Nisl rhoncus mattis rhoncus urna neque. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Pellentesque nec nam aliquam sem. Tincidunt id aliquet risus feugiat in ante metus. Pulvinar neque laoreet suspendisse interdum consectetur libero. Enim nec dui nunc mattis enim ut. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla.',
      imageUrl: "../../../assets/img/shop_product2.jpg",
      category: "Man",   
      size: "One Size",
      color: "Green",
      number: 1
    },
    {
      id: 3,
      name: "Man's T-shirt - Stars3",
      price: 47,
      description: 'Ornare quam viverra orci sagittis eu volutpat. Pellentesque sit amet porttitor eget dolor morbi non arcu. In nulla posuere sollicitudin aliquam. Mus mauris vitae ultricies leo integer malesuada nunc vel. Neque convallis a cras semper auctor neque vitae. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Diam in arcu cursus euismod quis viverra nibh cras.',
      imageUrl: "../../../assets/img/shop_product3.jpg",
      category: "Man",  
      size: "One Size",
      color: "Green", 
      number: 1
    },
    {
        id: 4,
        name: "Man's T-shirt - Stars1",
        price: 28,
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imageUrl: "../../../assets/img/shop_product4.jpg",
        category: "Man",   
        size: "One Size",
        color: "Brown",
        number: 1
      },
      {
        id: 5,
        name: "Man's T-shirt - Stars2",
        price: 30,
        description: 'Nulla pharetra diam sit amet nisl. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Nisl rhoncus mattis rhoncus urna neque. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Pellentesque nec nam aliquam sem. Tincidunt id aliquet risus feugiat in ante metus. Pulvinar neque laoreet suspendisse interdum consectetur libero. Enim nec dui nunc mattis enim ut. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla.',
        imageUrl: "../../../assets/img/shop_product5.jpg",
        category: "Man",   
        size: "One Size",
        color: "Blue",
        number: 1
      },
      {
        id: 6,
        name: "Man's T-shirt - Stars3",
        price: 47,
        description: 'Ornare quam viverra orci sagittis eu volutpat. Pellentesque sit amet porttitor eget dolor morbi non arcu. In nulla posuere sollicitudin aliquam. Mus mauris vitae ultricies leo integer malesuada nunc vel. Neque convallis a cras semper auctor neque vitae. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Diam in arcu cursus euismod quis viverra nibh cras.',
        imageUrl: "../../../assets/img/shop_product6.jpg",
        category: "Man",  
        size: "One Size",
        color: "Green", 
        number: 1
      }
  ];

  export const productsForWoman = [
    {
      id: 7,
      name: "Woman's T-shirt - Stars1",
      price: 28,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageUrl: "../../../assets/img/shop_product7.jpg",
      category: "Woman",   
      size: "One Size",
      color: "Red",
      number: 1
    },
    {
      id: 8,
      name: "Woman's T-shirt - Stars2",
      price: 30,
      description: 'Nulla pharetra diam sit amet nisl. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Nisl rhoncus mattis rhoncus urna neque. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Pellentesque nec nam aliquam sem. Tincidunt id aliquet risus feugiat in ante metus. Pulvinar neque laoreet suspendisse interdum consectetur libero. Enim nec dui nunc mattis enim ut. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla.',
      imageUrl: "../../../assets/img/shop_product8.jpg",
      category: "Woman",   
      size: "One Size",
      color: "Pink", 
      number: 1
    },
    {
      id: 9,
      name: "Woman's T-shirt - Stars3",
      price: 47,
      description: 'Ornare quam viverra orci sagittis eu volutpat. Pellentesque sit amet porttitor eget dolor morbi non arcu. In nulla posuere sollicitudin aliquam. Mus mauris vitae ultricies leo integer malesuada nunc vel. Neque convallis a cras semper auctor neque vitae. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Diam in arcu cursus euismod quis viverra nibh cras.',
      imageUrl: "../../../assets/img/shop_product9.jpg",
      category: "Woman",    
      size: "One Size",
      color: "Green",
      number: 1
    },
  ];


  export const productsForChildren = [
    {
      id: 10,
      name: "Children's T-shirt - Stars1",
      price: 28,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageUrl: "../../../assets/img/shop_product10.jpg",
      category: "Children",    
      size: "One Size",
      color: "Green",
      number: 1
    },
    {
      id: 11,
      name: "Children's T-shirt - Stars2",
      price: 30,
      description: 'Nulla pharetra diam sit amet nisl. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Nisl rhoncus mattis rhoncus urna neque. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Pellentesque nec nam aliquam sem. Tincidunt id aliquet risus feugiat in ante metus. Pulvinar neque laoreet suspendisse interdum consectetur libero. Enim nec dui nunc mattis enim ut. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla.',
      imageUrl: "../../../assets/img/shop_product11.jpg",
      category: "Children",     
      size: "One Size",
      color: "Pink",
      number: 1
    },
  ];