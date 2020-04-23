let orderedQuantity = prompt('Please input a value');
   

let availableQuantity=orderedQuantity >15 ?'Sorry, we don’t have enough in stock':'Great, we will soon ship your order';

  if (orderedQuantity >15)
  console.log('Sorry, we don’t have enough in stock');
  if (orderedQuantity <15)
  console.log('Great, we will soon ship your order');