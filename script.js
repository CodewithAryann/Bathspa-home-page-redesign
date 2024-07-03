function navscroll(){
    let lastScrollTop = 0;
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            // Downscroll
            nav.classList.add('hidden');
        } else {
            // Upscroll
            nav.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop;
    });
    
}
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
 function questions(){
    document.addEventListener('DOMContentLoaded', function() {
        function questions() {
            var questions = document.querySelectorAll('.question');
        
            questions.forEach(function(question) {
                question.addEventListener('click', function() {
                    var answer = this.nextElementSibling;
                    var arrow = this.querySelector('.arrow');
    
                    // Close all answers
                    var allAnswers = document.querySelectorAll('.answer');
                    allAnswers.forEach(function(ans) {
                        if (ans !== answer && ans.classList.contains('show')) {
                            ans.classList.remove('show');
                        }
                    });
    
                    // Reset all arrows
                    var allArrows = document.querySelectorAll('.arrow');
                    allArrows.forEach(function(arr) {
                        if (arr !== arrow) {
                            arr.style.transform = 'rotate(0deg)';
                        }
                    });
    
                    // Toggle current answer and arrow
                    if (answer.classList.contains('show')) {
                        answer.classList.remove('show');
                        arrow.style.transform = 'rotate(0deg)';
                    } else {
                        answer.classList.add('show');
                        arrow.style.transform = 'rotate(180deg)';
                    }
                });
            });
        }
    
        questions();
    });
 }
 function headinganim(){
    gsap.utils.toArray('.heading-text h1, .heading-text2 p').forEach((section, index) => {
        gsap.from(section, {
          opacity: 0,
          y: 20,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%', 
            end: '+=100',
            toggleActions: 'play none none reverse'
          }
        });
      });
 }
 function headinganim2(){
    gsap.utils.toArray('.heading-text3 p').forEach((section, index) => {
        gsap.from(section, {
          opacity: 0,
          y: 20,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%', 
            end: '+=100',
            toggleActions: 'play none none reverse'
          }
        });
      });
 }
 function objectanim(){
  gsap.utils.toArray('#object').forEach((section, index) => {
    gsap.from(section, {
      opacity: 0,
      y: 20,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%', 
        end: '+=100',
        toggleActions: 'play none none reverse'
      }
    });
  });
 }

 function bluerecanmi(){
    gsap.utils.toArray('.blue-rec-2 h1, .blue-rec-2 p').forEach((section, index) => {
        gsap.from(section, {
          opacity: 0,
          y: 20,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%', 
            end: '+=100',
            toggleActions: 'play none none reverse'
          }
        });
      });
 }

 function whychooseanim(){
    gsap.utils.toArray('.why-choose-section h1, .why-choose-section p').forEach((section, index) => {
        gsap.from(section, {
          opacity: 0,
          y: 20,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%', 
            end: '+=100',
            toggleActions: 'play none none reverse'
          }
        });
      });
 }
 gsap.utils.toArray('.program h1,.program .line, .program h2,.program .txt',).forEach((section, index) => {
    gsap.from(section, {
      opacity: 0,
      y: 20,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%', 
        end: '+=100',
        toggleActions: 'play none none reverse'
      }
    });
  });

 function graduationanim(){
    gsap.utils.toArray('.graduation-rate p').forEach((section, index) => {
        gsap.from(section, {
          opacity: 0,
          y: 20,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%', 
            end: '+=100',
            toggleActions: 'play none none reverse'
          }
        });
      });
 }

 function scholarshipsanim(){
    gsap.utils.toArray('.scholarships h1, .scholarships p').forEach((section, index) => {
        gsap.from(section, {
          opacity: 0,
          y: 20,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%', 
            end: '+=100',
            toggleActions: 'play none none reverse'
          }
        });
      });
 }

 function insideBlueanim(){
    gsap.utils.toArray('.inside-blue h1, .inside-blue p, .inside-blue .line').forEach((section, index) => {
        gsap.from(section, {
          opacity: 0,
          y: 20,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%', 
            end: '+=100',
            toggleActions: 'play none none reverse'
          }
        });
      });
 }
 function newsanim(){
    gsap.utils.toArray('.news p, .news h1, .news .line, .news img').forEach((section, index) => {
        gsap.from(section, {
          opacity: 0,
          y: 20,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%', 
            end: '+=100',
            toggleActions: 'play none none reverse'
          }
        });
      });
 }
 function testwhiteanim(){
    gsap.utils.toArray('.test-white h1, .test-white p, .test-white .line').forEach((section, index) => {
        gsap.from(section, {
          opacity: 0,
          y: 20,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%', 
            end: '+=100',
            toggleActions: 'play none none reverse'
          }
        });
      });
    
 }

 function questionanim(){
    gsap.utils.toArray('.top-txt h1, .top-txt h2, .top-txt .line, .top-txt img').forEach((section, index) => {
        gsap.from(section, {
          opacity: 0,
          y: 20,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%', 
            end: '+=100',
            toggleActions: 'play none none reverse'
          }
        });
      });
 }

function contactanim(){
    gsap.utils.toArray('.contact-white h1, .contact-white h2, .contact-white .line').forEach((section, index) => {
        gsap.from(section, {
          opacity: 0,
          y: 20,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%', 
            end: '+=100',
            toggleActions: 'play none none reverse'
          }
        });
      });
}

 function footeranim(){
    gsap.utils.toArray('.footer-top').forEach((section, index) => {
      gsap.from(section, {
        opacity: 0,
        y: 20,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%', 
          end: '+=100',
          toggleActions: 'play none none reverse'
        }
      });
    });
 }
 document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-links");

  hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("active");
  });

  navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          if (window.innerWidth <= 1000) {
              event.preventDefault();
              const parentDropdown = this.parentElement;
              parentDropdown.classList.toggle("active");
          }
      });
  });
});



navscroll();
testbox();
locosmoothscroll();
questions();
headinganim();
headinganim2();
objectanim();
bluerecanmi();
whychooseanim();
graduationanim();
scholarshipsanim();
insideBlueanim();
testwhiteanim();
newsanim();
questionanim();
contactanim();
footeranim();