function testbox() {
    const testimonials = [
        {
            name: "Zyra M. Rey",
            degree: "MA Business & Management",
            text: "Enrolling in BSU to pursue my Master's in Business & Management is one of the best career decisions I’ve made because it strengthened my knowledge and skills in my current industry. In this competitive world we live in today, investing in oneself through education will give you an edge and will definitely work to your advantage.",
            img: "images/test-img.png"
        },
        {
            name: "Raven Lucin",
            degree: "MSc Creative Computing",
            text: "The Creative Computing programme enabled me to hone my craft in being creative and equip me to become competitive in an ever-changing landscape of the digital age. This programme combines technology, creativity and imagination and turn those into reality by creating. With the industry continously evolving, students who are digitally equipped will have a competitive advantage on the market.",
            img: "images/raven.png"
        },
        {
            name: "Arooj Baig",
            degree: "MA Business & Management",
            text: "Masters at Bath Spa University gave me the opportunity to shape my career skill set and critical insights, which will help me tackle practical business and management problems. It is not a typical education, but rather one that encourages you to think beyond the box. Professors at BSU proved to be mentors for pursuing a very competitive commercial life. For me, BSU would always be associated with the development of my professional capital and personality.",
            img: "images/arooj.png"
        },
    ];
    
    let currentTestimonial = 0;
    
    document.getElementById('prevBtn').addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        updateTestimonial();
    });
    
    document.getElementById('nextBtn').addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial();
    });
    
    function updateTestimonial() {
        const testimonial = testimonials[currentTestimonial];
        const insideBlue = document.querySelector('.inside-blue');
        const elements = insideBlue.querySelectorAll('h1, h2, p, img');
        elements.forEach(el => {
            el.classList.remove('active');
        });
        setTimeout(() => {
            document.querySelector('.inside-blue h1').textContent = testimonial.name;
            document.querySelector('.inside-blue h2').textContent = testimonial.degree;
            document.getElementById('testimonial-text').textContent = testimonial.text;
            document.querySelector('.test-blue2 img').src = testimonial.img;
            elements.forEach(el => {
                el.classList.add('active');
            });
        }, 500);
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        updateTestimonial();
        const elements = document.querySelectorAll('.inside-blue h1, .inside-blue h2, .inside-blue p, .inside-blue img');
        elements.forEach(el => {
            el.classList.add('active');
        });
    });
    
}
function locosmoothscroll() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
document.addEventListener('DOMContentLoaded', function() {
    var questions = document.querySelectorAll('.question');
    
    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            var answer = this.nextElementSibling;
            var arrow = this.querySelector('.arrow');

            if (answer.classList.contains('show')) {
                answer.classList.remove('show');
                arrow.style.transform = 'rotate(0deg)';
            } else {
                answer.classList.add('show');
                arrow.style.transform = 'rotate(180deg)';
            }
        });
    });
});


testbox();
locosmoothscroll();