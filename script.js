  const reviews=[
      {
          id:1,
          image:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name:"Susan Smith",
          job:"Web Developer",
          text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
      },
      {
        id:2,
        image:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name:"Peter Jones",
        job:"Intern",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
      },
    
    {
        id:3,
        image:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name:"Sara Jones",
        job:"UX Designer",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },
    {
        id:4,
        image:"https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name:"Bill Anderson",
        job:"The Boss",
        text:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    }
    
  ];

  var img=document.getElementById("image");
  var author=document.getElementById("author");
  var job=document.getElementById("job");
  var info=document.getElementById("info");
  var buttonPrev=document.querySelector(".btn-prev");
  var buttonNext=document.querySelector(".btn-nxt");
  var buttonRandom=document.querySelector(".btn-random");

  var index=0;

  window.addEventListener("DOMContentLoaded",function(){
    details(index);
  });

  buttonNext.addEventListener("click",function(){
      index++;

      if(index>reviews.length-1){
          index=0;
      };
      details(index);
  });

  buttonPrev.addEventListener("click",function(){
      index--;
      if(index<0){
          index=reviews.length-1;
      };
      details(index);
  });

  buttonRandom.addEventListener("click",function(){
      var n=Math.floor(Math.random()*reviews.length);
    details(n);
  })




  function details(index){
    var item=reviews[index];
    img.src=item.image;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
  }