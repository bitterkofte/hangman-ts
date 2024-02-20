import head from '../assets/head.svg'

export const Header = () => {
  return (
    <nav className="header">
      <h2 className="title">Hangman.ts</h2>
      <img src={head} className="logo" alt="head" />
    </nav>
  )
}