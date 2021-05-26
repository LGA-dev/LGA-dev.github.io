const Header = () => {
  return (
      <div>
        {
          isOpen
          ?
          <OpenNavbar />
          : 
          <ClosedNavbar />
        }
      </div>
  );
}

export default Header;