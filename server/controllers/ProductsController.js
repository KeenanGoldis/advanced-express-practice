import products from "./products";

export function list(request, response) {
  ContactModel.find({}).exec()
  promise.then(products => {
    return response.json(products);
  });
}

export function show(request, response) {
  let productId = request.params.id;

  let singleProduct = products.find(function(product){
    return productId === product._id;
  })
 return response.json(singleProduct);
}

export function create(request, response) {
   const product = new ProductModel({
     name: request.body.firstName,
     description: request.body.description
   });
   contact.save()
   .then(product => {
     return response.json(product);
   });
 };


export function update(request, response) {
 return response.json({theId: request.params.id});
}
export function remove(request, response) {
 return response.json({});
}
