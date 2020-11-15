import React, {useState} from 'react';
import '../../styles/feed.css'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BoardList() {
    const like = <FontAwesomeIcon icon={faHeart} />
    const [boards, setBoards] = useState([
        {
            username: "Tyna",
            name: "Wedding Inspo",
            board_url: "https://images.squarespace-cdn.com/content/v1/5cfb844b01eb940001c9ac92/1577495232743-2I9BXNP2WHF9I8HAFHSB/ke17ZwdGBToddI8pDm48kMFiMyT1nneRMhnmfuSfpxZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mlM0or4nqX7jrn5yWu0hA1QXedaIFqnAbw_tQShHbKg4-O_KAc44ak5jGzrnn7f3A/2020+Vision+Board.jpg",
            likes: 500
        },
        {
            username: "Michelle77",
            name: "Master Bedroom",
            board_url: "https://i.ytimg.com/vi/a3U_VRDaRIQ/maxresdefault.jpg",
            likes: 500
        },
        {
            username: "Johnah",
            name: "Wedding Inspo",
            board_url: "https://cdn.shopify.com/s/files/1/1536/4861/articles/vision-board-2_1024x1024.jpg?v=1476395397",
            likes: 500
        },
        {
            username: "Julie",
            name: "Wedding Inspo",
            board_url: "https://images.squarespace-cdn.com/content/v1/56219993e4b09501ec54f74a/1492459278105-Z7JABV54FEMPF0HO9G6A/ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIeQMKeWYgwh6Mn73n2eZmZLHHpcPIxgL2SArp_rN2M_AKMshLAGzx4R3EDFOm1kBS/Vision+Board",
            likes: 500
        },
        {
            username: "Kelly",
            name: "Wedding Inspo",
            board_url: "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg",
            likes: 500
        },
        {
            username: "PooBear123",
            name: "Wedding Inspo",
            board_url: "https://i.pinimg.com/originals/4d/65/3c/4d653cffa8cdd97c1dcf002ac63a22ed.jpg",
            likes: 500
        },
        {
            username: "Destinee",
            name: "Wedding Inspo",
            board_url: "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg",
            likes: 500
        },
        {
            username: "Angel33",
            name: "Wedding Inspo",
            board_url: "https://www.amazer.me/wp-content/uploads/2018/10/image3-24-1024x626.jpg",
            likes: 500
        },
        {
            username: "Doug19",
            name: "Wedding Inspo",
            board_url: "https://i0.wp.com/abundantaffirmationsblog.com/wp-content/uploads/2020/01/manifestation-board-2020-copy.png?resize=1024%2C768&ssl=1",
            likes: 500
        },
        {
            username: "Kevin",
            name: "Wedding Inspo",
            board_url: "https://images.squarespace-cdn.com/content/v1/5d831d79791b8a06dddc396a/1579073697308-1R610YJ8N1LC2L0XZGBX/ke17ZwdGBToddI8pDm48kHUbwavCmVK2ZfNyKM0ywlh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWUtGLhcrQaJuL1WOEh59KJmNRV0Jt9s1Js3F4WTlv8wJvwGh1qtNWvMhYKnvaKhbA/Untitled+design+%283%29.png",
            likes: 500
        },
        {
            username: "Destinee",
            name: "Wedding Inspo",
            board_url: "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg",
            likes: 500
        },
        {
            username: "Angel33",
            name: "Wedding Inspo",
            board_url: "https://www.amazer.me/wp-content/uploads/2018/10/image3-24-1024x626.jpg",
            likes: 500
        },
        {
            username: "Doug19",
            name: "Wedding Inspo",
            board_url: "https://i0.wp.com/abundantaffirmationsblog.com/wp-content/uploads/2020/01/manifestation-board-2020-copy.png?resize=1024%2C768&ssl=1",
            likes: 500
        },
        {
            username: "Kevin",
            name: "Wedding Inspo",
            board_url: "https://images.squarespace-cdn.com/content/v1/5d831d79791b8a06dddc396a/1579073697308-1R610YJ8N1LC2L0XZGBX/ke17ZwdGBToddI8pDm48kHUbwavCmVK2ZfNyKM0ywlh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWUtGLhcrQaJuL1WOEh59KJmNRV0Jt9s1Js3F4WTlv8wJvwGh1qtNWvMhYKnvaKhbA/Untitled+design+%283%29.png",
            likes: 500
        },
        {
            username: "Tyna",
            name: "Wedding Inspo",
            board_url: "https://images.squarespace-cdn.com/content/v1/5cfb844b01eb940001c9ac92/1577495232743-2I9BXNP2WHF9I8HAFHSB/ke17ZwdGBToddI8pDm48kMFiMyT1nneRMhnmfuSfpxZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mlM0or4nqX7jrn5yWu0hA1QXedaIFqnAbw_tQShHbKg4-O_KAc44ak5jGzrnn7f3A/2020+Vision+Board.jpg",
            likes: 500
        },
        {
            username: "Michelle77",
            name: "Master Bedroom",
            board_url: "https://i.ytimg.com/vi/a3U_VRDaRIQ/maxresdefault.jpg",
            likes: 500
        },
        {
            username: "Johnah",
            name: "Wedding Inspo",
            board_url: "https://cdn.shopify.com/s/files/1/1536/4861/articles/vision-board-2_1024x1024.jpg?v=1476395397",
            likes: 500
        },
        {
            username: "Julie",
            name: "Wedding Inspo",
            board_url: "https://images.squarespace-cdn.com/content/v1/56219993e4b09501ec54f74a/1492459278105-Z7JABV54FEMPF0HO9G6A/ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIeQMKeWYgwh6Mn73n2eZmZLHHpcPIxgL2SArp_rN2M_AKMshLAGzx4R3EDFOm1kBS/Vision+Board",
            likes: 500
        },
        {
            username: "Kelly",
            name: "Wedding Inspo",
            board_url: "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg",
            likes: 500
        },
        {
            username: "PooBear123",
            name: "Wedding Inspo",
            board_url: "https://i.pinimg.com/originals/4d/65/3c/4d653cffa8cdd97c1dcf002ac63a22ed.jpg",
            likes: 500
        },
        {
            username: "Destinee",
            name: "Wedding Inspo",
            board_url: "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg",
            likes: 500
        },
    ])
    return (
        <div className='feed'>
            {boards.map(board => (
                <div className='feedBoard' key={board.board_url}>
                    <img src={board.board_url} />
                    <div className='feedBoard_info'>
                        <h3>{board.name}</h3>
                        <span style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>{board.username}
                            <span>
                                {board.likes}
                                <button>{like}</button>
                            </span>
                        </span>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default BoardList
