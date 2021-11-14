import './Sidebar.css'
import fotoUser from '../../assets/FotoLucaGui2.jpeg'

const Sidebar = ({ sidebarOpen, closeSideBar }) => {
    return (
        <div className={sidebarOpen ? 'sidebar-responsive' : ''} id='sidebar'>
            <div className='sidebar__title'>
                <div className='sidebar__img'>
                    <img src={fotoUser} alt='fotoUser'></img>
                    <h1>Freelance System</h1>
                </div>

                <div className='sidebar__title'>
                    <i
                        onClick={() => closeSideBar}
                        className='fa fa-times'
                        id='sidebarIcon'
                        aria-hidden='true'
                    ></i>
                </div>
            </div>
            <div className='sidebar__menu'>
                <div className='sidebar__link actibe_menu_link'>
                    <i className='fa fa-minus-square'></i>
                    <a href='#'>Home</a>
                </div>

                <h2>ADMIN</h2>
                <div className='sidebar__link'>
                    <i className='fa fa-archive'></i>
                    <a href='#'>Área Administrativa</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-building'></i>
                    <a href='#'>Lojas</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-archive'></i>
                    <a href='google.com'>Produtos</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-bars'></i>
                    <a href='google.com'>Categorias</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-cutlery'></i>
                    <a href='google.com'>Pedidos</a>
                </div>

                <h2>PESSOAS</h2>
                <div className='sidebar__link'>
                    <i className='fa fa-male'></i>
                    <a href='google.com'>Administradores</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-user-circle'></i>
                    <a href='google.com'>Usuários</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-money'></i>
                    <a href='google.com'>Pagamentos e Custos</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-tasks'></i>
                    <a href='google.com'>A Plataforma</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-file-text'></i>
                    <a href='google.com'>Política de Privacidade</a>
                </div>
                <div className='sidebar__logout'>
                    <i className='fa fa-power-off'></i>
                    <a href='google.com'>Logout</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;