# Image Processing API


## API endpoint 

 endpoint:api/images


examples:

http:localhost:3000/api/images?filename=fjord&width=200&height=300
http:localhost:3000/api/images?filename=santamonica&width=200&height=300
http:localhost:3000/api/images?filename=palmtunnel&width=500&height=300
http:localhost:3000/api/images?filename=icelandwaterfall&width=200&height=300
http:localhost:3000/api/images?filename=encenadaport&width=200&height=300



## project description

->This project works on editing dimensions of images stated by the user in the url query parameters.

->Editing and dimensioning images is done by the Sharp module
-> The user has to enter the correct filename,width and height in order to view the edited image


->testingImages folder is used to evaluate jasmine tests written in indexSpec.ts


## scripts used
-> prettier,lint,test,start

usage: npm run prettier
       npm run start
       npm run lint
       npm run test
       
