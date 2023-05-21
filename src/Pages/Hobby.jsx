import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const Hobby = () => {
    return (
        <>
            <h1 style={{ color: 'skyblue', fontFamily: 'sans-serif', fontSize: '60px', textAlign: "center" }}>Favorite Hobbies</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                position="top"
                                sx={{ background: 'rgba(0, 0, 0, 0.5)' }}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </>
    );
}

export default Hobby

const itemData = [
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvueMUGWugVZpiNnIRCt8u7Zq5tdDQYC5rsA&usqp=CAU',
        title: 'Poker',
    },
    {
        img: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i4REOwydeS78/v0/-1x-1.jpg',
        title: 'Soccer',
    },
    {
        img: 'https://m.media-amazon.com/images/I/A1xBeIqN1QL._AC_UF1000,1000_QL80_.jpg',
        title: 'Video games',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_pSBZ2KsYSjyQMaeTs9mVY_h4RC7ch13Ciw&usqp=CAU',
        title: 'Ping Pong',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcAVWRadgwlj60fxBfvrgLH7Ltxe4lkGkTsQ&usqp=CAU',
        title: 'fishing and more',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrECrZv1imZRtFsbebu9vAQDkN0C8vCf2xhw&usqp=CAU',
        title: 'Camping',
    }
];