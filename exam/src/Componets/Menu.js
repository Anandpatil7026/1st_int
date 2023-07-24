import React from 'react';

const Menu = () => {
  return (
    <div>
      <header>
        {/* Your header content */}
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src="food-item-1.jpg" alt="Food Item 1" />
              <h3>Food Item 1</h3>
              <p>Price: $10</p>
            </div>
            {/* Repeat the above code for other food items */}
          </div>
        </div>
      </main>
      <footer>
        {/* Your footer content */}
      </footer>
    </div>
  );
};

export default Menu;