const fontSize = document.querySelectorAll('div.book__control_font-size > .font-size');
fontSize[1].dataset.size = 'original';
const editSize = document.querySelectorAll('div.book__controls > div');
const contentBlock = document.querySelector('div.book__content');

for ( let styleKey of editSize ) {
    styleKey.addEventListener('click', function(event) {
        event.preventDefault();
        let eventKey = event.target.dataset;

        for (let key in eventKey) {
            if (key === 'size') {
                let currentFontSize = document.querySelector('.font-size_active');
                currentFontSize.classList.remove('font-size_active');
                event.target.classList.add('font-size_active');

                switch (eventKey[key]) {

                    case 'big': 
                    if (contentBlock.classList.contains('font-size_small')) {
                        contentBlock.classList.remove('font-size_small');
                    }
                    contentBlock.classList.add('font-size_big');
                    break;

                    
                    case 'small': 
                    if (contentBlock.classList.contains('font-size_big')) {
                        contentBlock.classList.remove('font-size_big');
                    }
                    contentBlock.classList.add('font-size_small');
                    break;
                    
                    case 'original': 
                    if (contentBlock.classList.contains('font-size_small')) {
                        contentBlock.classList.remove('font-size_small');
                    }
                    if (contentBlock.classList.contains('font-size_big')) {
                        contentBlock.classList.remove('font-size_big');
                    }
                    break;
                }
            }
        }
    });
}