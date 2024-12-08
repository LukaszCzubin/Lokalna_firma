let currentIndex = 0;
        const images = document.querySelectorAll('.image');
        const progressBars = document.querySelectorAll('.progress-bar');

        function showSlide(index) {
            const totalImages = images.length;
            if (index >= totalImages) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = totalImages - 1;
            } else {
                currentIndex = index;
            }
            const offset = -currentIndex * 100;
            document.querySelector('.image-container').style.transform = `translateX(${offset}%)`;
            updateProgressBars();
        }

        function changeSlide(direction) {
            showSlide(currentIndex + direction);
        }

        function updateProgressBars() {
            progressBars.forEach((bar, index) => {
                bar.classList.toggle('active', index === currentIndex);
            });
        }

        setInterval(() => {
            showSlide(currentIndex + 1);
        }, 10000);

        showSlide(currentIndex);