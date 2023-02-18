

const Nav = () => {
  return `
        <div className="container mx-auto tw-bg-red tw-font-body">
            <nav class="tw-fixed tw-pl-80 tw-pr-80 tw-bottom-2 tw-lg:bottom-8 w-full overflow-hidden z-50">
              <ul class="menu">
                <li class="tw-text-gray-500 tw-font-wieght"><a href="/"><i class="fa-solid fa-house"></i> Home</a></li>
                <li><a href="/About">About Page</a></li>
                <li><a href="/Projects">Projects</a></li>
                <li><a href="/Contact">Contact</a></li>
                <li><a href="/Post">Post</a></li>
              </ul>
          </nav>
        </div>
  `
}

export default Nav;

