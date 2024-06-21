document.addEventListener("DOMContentLoaded", function() {
    function updateItemsLayout(containerId, itemClass) {
        const container = document.getElementById(containerId);
        const items = document.querySelectorAll(itemClass);

        function updateLayout() {
            let itemsPerRow;

            if (window.innerWidth >= 1200) {
                itemsPerRow = 4;
            } else if (window.innerWidth >= 992) {
                itemsPerRow = 3;
            } else if (window.innerWidth >= 768) {
                itemsPerRow = 2;
            } else {
                itemsPerRow = 1;
            }

            const itemWidth = `calc(${100 / itemsPerRow}% - 15px)`;
            items.forEach(item => {
                item.style.flex = `1 1 ${itemWidth}`;
            });
        }

        window.addEventListener('resize', updateLayout);
        updateLayout(); // Initial call to set the correct layout
    }

    updateItemsLayout('deals-container', '.deal-item');
    updateItemsLayout('arrivals-container', '.arrival-item');
});
