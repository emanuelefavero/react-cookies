import { useState } from 'react'
import { CookiesProvider } from 'react-cookie'
import { useCookies } from 'react-cookie'

function App() {
    const [name, setName] = useState('')
    const [password, setPwd] = useState('')
    const [cookie, setCookie, removeCookie] = useCookies(['user'])
    // NOTE: areThereCookies state is not necessary when you will have routes
    // simply refresh the page with useNavigate to immediately show the cookies
    const [areThereCookies, setAreThereCookies] = useState(false)

    // Set Cookies
    const handleSetCookies = () => {
        setCookie('Name', name, { path: '/' })
        setCookie('Password', password, { path: '/' })

        setAreThereCookies(true) // useNavigate instead of this state
    }

    // Delete Cookies
    const handleDeleteAllCookies = () => {
        removeCookie('Name', { path: '/' })
        removeCookie('Password', { path: '/' })

        setAreThereCookies(false) // useNavigate('/)
    }

    return (
        // Cookies Provider
        <CookiesProvider>
            {/* GET COOKIES VALUES FOR name, password */}
            <input
                type='text'
                placeholder='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            ></input>
            <input
                type='password'
                placeholder='password'
                value={password}
                onChange={(e) => setPwd(e.target.value)}
            ></input>

            {/* SET COOKIES Name, Password */}
            <button onClick={handleSetCookies}>Set Cookie</button>

            {/* SHOW COOKIES */}
            {areThereCookies && <h1>{cookie.Name}</h1>}
            {areThereCookies && <p>{cookie.Password}</p>}
            {areThereCookies === null && 'No cookie set'}

            {/* DELETE ALL COOKIES */}
            <button onClick={handleDeleteAllCookies}>Delete All cookies</button>
        </CookiesProvider>
    )
}

export default App
