import { useNavigate } from 'react-router-dom'
// Assets
import { LiaUserSlashSolid } from 'react-icons/lia'
import { AiFillTag, AiFillEdit } from 'react-icons/ai'
// Styles
import styles from '../styles/components/menu.module.css'
import { auth } from '../firebase/config'



/**
 * Component renders the app main menu.
 */
function Menu() {
    // States
    const navigate = useNavigate()
    

    const handleDeleteUser = () => {
        console.log('press')
        const confirmDelete = window.confirm(
          'Are you sure you want to delete your account forever? This action is irreversible.'
        );
    
        if (confirmDelete) {
          const user = auth.currentUser;
    
          if (user) {
            // Delete the user account
            user
              .delete()
              .then(() => {
                console.log('User account deleted successfully.');
              })
              .catch((error) => {
                console.error('Error deleting user:', error.message);
              });
          }
        }
      };

    return (
        <div className={styles["Menu"]}>
            <div className={styles["btns-list"]}>
                <button onClick={handleDeleteUser}>
                    מחק את המשתמש לצמיתות
                    <LiaUserSlashSolid size={24} />
                </button>
                <button>
                    שינוי תחומי העיניין
                    <AiFillTag size={24}/>
                </button>
                <button onClick={() => navigate('/restore-password')}>
                    שינוי סיסמא
                    <AiFillEdit size={24}/>
                </button>
            </div>
        </div>
    )
}

export default Menu
