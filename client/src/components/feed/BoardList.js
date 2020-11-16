import React, {useState} from 'react';
import '../../styles/feed.css'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
        width: '700px',
        height: '700px',
        borderRadius: "30px"
    }
  };

function BoardList() {
    const like = <FontAwesomeIcon icon={faHeart} />
    const [boards, setBoards] = useState([
        {
            id: 1,
            username: "Tyna",
            name: "Wedding Inspo",
            board_url: "https://images.squarespace-cdn.com/content/v1/5cfb844b01eb940001c9ac92/1577495232743-2I9BXNP2WHF9I8HAFHSB/ke17ZwdGBToddI8pDm48kMFiMyT1nneRMhnmfuSfpxZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mlM0or4nqX7jrn5yWu0hA1QXedaIFqnAbw_tQShHbKg4-O_KAc44ak5jGzrnn7f3A/2020+Vision+Board.jpg",
            likes: 500
        },
        {
            id: 2,
            username: "Michelle77",
            name: "Master Bedroom",
            board_url: "https://i.ytimg.com/vi/a3U_VRDaRIQ/maxresdefault.jpg",
            likes: 500
        },
        {
            id: 3,
            username: "Johnah",
            name: "Wedding Inspo",
            board_url: "https://cdn.shopify.com/s/files/1/1536/4861/articles/vision-board-2_1024x1024.jpg?v=1476395397",
            likes: 500
        },
        {
            id: 4,
            username: "Julie",
            name: "Wedding Inspo",
            board_url: "https://images.squarespace-cdn.com/content/v1/56219993e4b09501ec54f74a/1492459278105-Z7JABV54FEMPF0HO9G6A/ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIeQMKeWYgwh6Mn73n2eZmZLHHpcPIxgL2SArp_rN2M_AKMshLAGzx4R3EDFOm1kBS/Vision+Board",
            likes: 500
        },
        {
            id: 5,
            username: "Kelly",
            name: "Wedding Inspo",
            board_url: "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg",
            likes: 500
        },
        {
            id: 6,
            username: "PooBear123",
            name: "Wedding Inspo",
            board_url: "https://i.pinimg.com/originals/4d/65/3c/4d653cffa8cdd97c1dcf002ac63a22ed.jpg",
            likes: 500
        },
        {
            id: 7,
            username: "Destinee",
            name: "Wedding Inspo",
            board_url: "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg",
            likes: 500
        },
        {
            id: 8,
            username: "Angel33",
            name: "Wedding Inspo",
            board_url: "https://www.amazer.me/wp-content/uploads/2018/10/image3-24-1024x626.jpg",
            likes: 500
        },
        {
            id: 9,
            username: "Doug19",
            name: "Wedding Inspo",
            board_url: "https://i0.wp.com/abundantaffirmationsblog.com/wp-content/uploads/2020/01/manifestation-board-2020-copy.png?resize=1024%2C768&ssl=1",
            likes: 500
        },
        {
            id: 10,
            username: "Kevin",
            name: "Wedding Inspo",
            board_url: "https://images.squarespace-cdn.com/content/v1/5d831d79791b8a06dddc396a/1579073697308-1R610YJ8N1LC2L0XZGBX/ke17ZwdGBToddI8pDm48kHUbwavCmVK2ZfNyKM0ywlh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWUtGLhcrQaJuL1WOEh59KJmNRV0Jt9s1Js3F4WTlv8wJvwGh1qtNWvMhYKnvaKhbA/Untitled+design+%283%29.png",
            likes: 500
        },
        {
            id: 11,
            username: "Destinee",
            name: "Wedding Inspo",
            board_url: "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg",
            likes: 500
        },
        {
            id: 12,
            username: "Angel33",
            name: "Wedding Inspo",
            board_url: "https://www.amazer.me/wp-content/uploads/2018/10/image3-24-1024x626.jpg",
            likes: 500
        },
        {
            id: 13,
            username: "Doug19",
            name: "Wedding Inspo",
            board_url: "https://i0.wp.com/abundantaffirmationsblog.com/wp-content/uploads/2020/01/manifestation-board-2020-copy.png?resize=1024%2C768&ssl=1",
            likes: 500
        },
        {
            id: 14,
            username: "Kevin",
            name: "Wedding Inspo",
            board_url: "https://images.squarespace-cdn.com/content/v1/5d831d79791b8a06dddc396a/1579073697308-1R610YJ8N1LC2L0XZGBX/ke17ZwdGBToddI8pDm48kHUbwavCmVK2ZfNyKM0ywlh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWUtGLhcrQaJuL1WOEh59KJmNRV0Jt9s1Js3F4WTlv8wJvwGh1qtNWvMhYKnvaKhbA/Untitled+design+%283%29.png",
            likes: 500
        },
        {
            id: 15,
            username: "Tyna",
            name: "Wedding Inspo",
            board_url: "https://images.squarespace-cdn.com/content/v1/5cfb844b01eb940001c9ac92/1577495232743-2I9BXNP2WHF9I8HAFHSB/ke17ZwdGBToddI8pDm48kMFiMyT1nneRMhnmfuSfpxZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mlM0or4nqX7jrn5yWu0hA1QXedaIFqnAbw_tQShHbKg4-O_KAc44ak5jGzrnn7f3A/2020+Vision+Board.jpg",
            likes: 500
        },
        {
            id: 16,
            username: "Michelle77",
            name: "Master Bedroom",
            board_url: "https://i.ytimg.com/vi/a3U_VRDaRIQ/maxresdefault.jpg",
            likes: 500
        },
        {
            id: 17,
            username: "Johnah",
            name: "Wedding Inspo",
            board_url: "https://cdn.shopify.com/s/files/1/1536/4861/articles/vision-board-2_1024x1024.jpg?v=1476395397",
            likes: 500
        },
        {
            id: 18,
            username: "Julie",
            name: "Wedding Inspo",
            board_url: "https://images.squarespace-cdn.com/content/v1/56219993e4b09501ec54f74a/1492459278105-Z7JABV54FEMPF0HO9G6A/ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIeQMKeWYgwh6Mn73n2eZmZLHHpcPIxgL2SArp_rN2M_AKMshLAGzx4R3EDFOm1kBS/Vision+Board",
            likes: 500
        },
        {
            id: 19,
            username: "Kelly",
            name: "Wedding Inspo",
            board_url: "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg",
            likes: 500
        },
        {
            id: 20,
            username: "PooBear123",
            name: "Wedding Inspo",
            board_url: "https://i.pinimg.com/originals/4d/65/3c/4d653cffa8cdd97c1dcf002ac63a22ed.jpg",
            likes: 500
        },
        {
            id: 21,
            username: "Destinee",
            name: "Wedding Inspo",
            board_url: "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg",
            likes: 500
        },
    ])

    const [isModal, setIsModal] = useState(false)
    const [show, setShow] = useState(false)
    const [activeBoard, setActiveBoard] = useState({})

    const handleClick = e => {
        e.preventDefault()
        const getId = e.nativeEvent.path[1].id
        const getBoard = boards.filter(board => {
            return board.id === parseInt(getId)
        })
        setActiveBoard(getBoard[0])
        console.log(activeBoard)
        setShow(true)
        // console.log(e.nativeEvent.path[1].id)
    }
    const handleClose = () => setShow(false)

    return (
        <div className='feed'>
            {boards.map((board, idx) => (
                <div className='feedBoard' key={idx} id={board.id} onClick={handleClick}>
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
            <Modal
                isOpen={show}
                onRequestClose={handleClose}
                style={customStyles}
                contentLabel='Example Modal'
            >
                <div>
                    <img style={{
                        width: "600px",
                        height: "500px"
                    }} src={activeBoard.board_url} />
                    <div>
                        <h3>{activeBoard.name}</h3>
                        <span style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>{activeBoard.username}
                            <span>
                                {activeBoard.likes}
                                <button type='submit' id={activeBoard.id} onClick={handleClick}>{like}</button>
                            </span>
                        </span>
                    </div>
                </div>

            </Modal>

        </div>
    )


}

export default BoardList
