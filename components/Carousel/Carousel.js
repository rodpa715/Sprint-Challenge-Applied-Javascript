class Carousel {
    constructor(carousel){
        this.carousel = carousel;
        this.leftButton = this.carousel.querySelector(".left-button");
        this.rightButton = this.carousel.querySelector(".right-button");
        
        this.currentIndex = 0;
        this.imagesNodeList = Array.from(this.carousel.querySelectorAll("img"));

        this.show(); //shows the first position of the array at start before triggering any of the events

        this.leftButton.addEventListener("click", () => this.goLeft());
        this.rightButton.addEventListener("click", () => this.goRight());
    }

    goLeft(){
        if (this.currentIndex > 0){ //if the current index is bigger than 0 
            this.currentIndex--; //decrement one on the index 
            this.hide();
            this.show();
        } else if(this.currentIndex === 0){    //if the current index is equal to 0 (the first position of the array)
            this.currentIndex = this.imagesNodeList.length - 1 //set the current index to the last position of the array (loop back to end)
            this.hide();
            this.show();
        }
    }

    goRight(){ 
        if(this.currentIndex < this.imagesNodeList.length - 1){ //if the current index is smaller than length of the array
            this.currentIndex++;    //increment one on the index
            this.hide();
            this.show();
        }else if (this.currentIndex === this.imagesNodeList.length - 1){ //if the current index is equal to the length of the array
            this.currentIndex = 0;  //set the current index to 0 which is the first position of the array (loop back to beginning)
            this.hide();
            this.show();
        }
    }

    hide(){
        this.imagesNodeList.forEach( img => img.style.display ="none") //hide all
    }

    show(){
        this.imagesNodeList[this.currentIndex].style.display = "flex" //show the image with the current index as position
    }
}


let carousel = document.querySelector(".carousel");
carouselInstance = new Carousel(carousel)
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
