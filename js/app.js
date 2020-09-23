var slideshow = [
    {
        image: "url('./images/slideOne.jpg')",
        text: "ავტო ლომბარდი თქვენზე მორგებული პირობებით"
    },
    {
        image: "url('./images/slideTwo.jpg')",
        text: "დაიწყე მართვა დღესვე"
    },
    {
        image: "url('./images/slideTree.jpg')",
        text: "0% ლიზინგის გაფორმების საკომისიო"
    },
    {
        image: "url('./images/slideFour.jpg')",
        text: "მოტო ლომბარდი"
    }
]

var Priorities = [
    "თვეში 2.95 %დან", "გადაფორმების გარეშე", "ტარების უფლებით", "კლებადი ძირით", "72 თვის ვადით"
]

var createPriority__p = document.createElement("p");
var priorityIndex = 1;
setInterval(function(){
    if(priorityIndex < Priorities.length){
        createPriority__p.innerText = Priorities[priorityIndex];
        createPriority__p.style.transition = "0.5s";
        priorityIndex++;
    }else{
        createPriority__p.innerText = Priorities[0];
        priorityIndex = 0;
    }
}, 2500);
document.getElementById("animationContent").appendChild(createPriority__p);

function SlideShow(arr, ID__Name){
    for(let i = 0; i < arr.length; i++){
        let create_li = document.createElement("li");
        let create_p = document.createElement("p");
        create_li.style.backgroundImage = arr[i].image;
        create_p.innerText = arr[i].text;
        create_li.appendChild(create_p);
        document.getElementById(ID__Name).appendChild(create_li);
    }
}

SlideShow(slideshow, "SlideShow__content");

$(document).ready(function(){
    let sliderWidth = $(".Slideshow__container").width();
    $(".SlideShow__content li").width(sliderWidth);
    $(window).resize(function(){
        let sliderWidthChanged = $(".Slideshow__container").width();
        $(".SlideShow__content li").width(sliderWidthChanged);
    })
})

var index = 0;

$(document).ready(function(){
    $(".next").click(function(){
        let sliderWidth = $(".Slideshow__container").width();
        index++;
        if(index < slideshow.length){
            $(".SlideShow__content").css({
                "margin-left": "-=" + sliderWidth,
                "transition": "2s"
            })
        }else{
            index = 0;
            $(".SlideShow__content").css({
                "margin-left": "0px",
                "transition": "3s"
            })
        }
    })
})

$(document).ready(function(){
    var index1 = 0;
    var carouselWidth = parseInt($(".SlideShow__content").width());
    let sliderWidth = $(".Slideshow__container").width();
    var carouselMargin = carouselWidth - parseInt(sliderWidth);
    $(".prev").click(function(){
        let sliderWidth = $(".Slideshow__container").width();
        if(index == 0){
            $(".SlideShow__content").css({
                "margin-left": "-" + carouselMargin.toString() + "px",
                "transition": "3s"
            })
            index = slideshow.length - 1;
        }else{
            $(".SlideShow__content").css({
                "margin-left": "+=" + sliderWidth,
                "transition": "2s"
            })
            index--;
        }
        alert(index);
    })
})

setInterval(function(){
    $(document).ready(function(){
        let sliderWidth = $(".Slideshow__container").width();
        index++;
        if(index < slideshow.length){
            $(".SlideShow__content").css({
                "margin-left": "-=" + sliderWidth,
                "transition": "2s"
            })
        }else{
            index = 0;
            $(".SlideShow__content").css({
                "margin-left": "0px",
                "transition": "2s"
            })
        }
    })
}, 5000);

$(document).ready(function(){
    let sliderWidth = parseInt($(".Slideshow__container").width());
    let res = index * sliderWidth;
    res = res.toString();
    $(window).resize(function(){
        $(".SlideShow__content").css({
            "margin-left": res + "px"
        })
    })
})

$(document).ready(function(){
    $("#LoanAmount").click(function(){
        let moneyValue = $("#LoanAmount").val();
        $(".cash").val(moneyValue);
    })
})

$(document).ready(function(){
    $(".cash").mouseout(function(){
        if($(".cash").val() >= 1000 && $(".cash").val() <= 30000){
            let cashInpValue = $(".cash").val()
            $("#LoanAmount").val(cashInpValue);
        }else{
            $(".cash").val(1000);
            $("#LoanAmount").val(1000);

        }
    })
})

$(document).ready(function(){
    $(".termBox").mouseout(function(){
        if($(".termBox").val() >= 3 && $(".termBox").val() <= 72){
            let termBoxInpValue = $(".termBox").val()
            $("#LoanTerm").val(termBoxInpValue);
        }else{
            $(".termBox").val(3);
            $("#LoanTerm").val(3);

        }
    })
})

$(document).ready(function(){
    $("#LoanTerm").click(function(){
        let TermValue = $("#LoanTerm").val();
        $(".termBox").val(TermValue);
    })
})

$(document).ready(function(){
    $(".AnimationText").click(function(){
        $(".AnimationText").animate({
            toggle: "width"
        })
    })
})

function calcularot(ID__Name){
    $(document).ready(function(){
        $(ID__Name).click(function(){
            let cash = parseInt($("#LoanAmount").val());
            let persent = 0.03;
            let term = parseInt($("#LoanTerm").val());
            let formula = cash * persent / ((1 - (Math.pow(1 + persent, -(term)))));
            formula = formula.toFixed(2);
            $(".cashResult").text(formula);
        })
    })
}

calcularot("#LoanTerm");
calcularot("#LoanAmount");

function calcularotOne(ID__Name){
    $(document).ready(function(){
        $(ID__Name).mouseout(function(){
            let cash = parseInt($("#LoanAmount").val());
            let persent = 0.03;
            let term = parseInt($("#LoanTerm").val());
            let formula = cash * persent / ((1 - (Math.pow(1 + persent, -(term)))));
            formula = formula.toFixed(2);
            $(".cashResult").text(formula);
        })
    })
}

document.getElementById("LoanAmount").addEventListener(DragEvent, function(){
    let getvalue = document.getElementById("LoanAmount").value();
    document.getElementById("cash").value(getvalue); 
})

calcularotOne("#cash");
calcularotOne("#termBox");