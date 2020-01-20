import React from 'react';

import './directory.styless.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
          sections: [
            {
              title: "sunglasses",
              imageUrl: "https://i.imgur.com/EQeCRMF.jpg",
              id: 1
            },
            {
              title: "acessories",
              imageUrl: "https://i.imgur.com/IEJ4C7o.jpg",
              id: 2
            },
            {
              title: "bike part",
              imageUrl: "https://i.imgur.com/AV5s7OV.png",             
              id: 3
            },
            {
              title: "bikes",
              imageUrl: "https://i.imgur.com/3m2mJdU.jpg", 
              size: 'large',
              id: 4
            },
            {
              title: "cycle wear",
              imageUrl: "https://i.imgur.com/3KZPCFE.png",
              size: 'large',
              id: 5
            }
          ]
        };
    }

    render() {
        return (
            <div className='directory-menu'>
              {
                this.state.sections.map(({ title, imageUrl, id, size }) => (
                  <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                ))
              }
            </div>
        )
    }
};

export default Directory;