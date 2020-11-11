import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "fresh",
          imageUrl: "https://media.finishline.com/i/finishline/CJ6700_100_P1",
          id: 1,
        },
        {
          title: "popular",
          imageUrl:
            "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/gsuin11ptg5qgktmzoat/air-force-1-07-mens-shoe-JkTGzADv.jpg",
          id: 2,
        },
        {
          title: "cheap",
          imageUrl:
            "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/vgku2dk60hh1zgnnr4o1/tanjun-big-kids-shoe-tmF5j2.jpg",
          id: 3,
        },
        {
          title: "womens",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0256/4243/4606/products/product-image-1197926037_1200x1200.jpg?v=1575443956",
          size: "large",
          id: 4,
        },
        {
          title: "mens",
          imageUrl:
            "https://chekich.com/i/l/000/0001613_chekich-ch253-st-black-men-sneakers.jpeg",
          size: "large",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
