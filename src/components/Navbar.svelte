<script>
    import { base } from '$app/paths';
</script>

<div class="navbar-container absolute">
    <div class="flex justify-center">
        <div class="navbar w-3/4">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="-1" class="btn btn-ghost md:hidden">
                        <input style="display: none;" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="white"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabindex="-1"
                        class="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-black"
                    >
                        <li><a href="{base}/" class="text-white">Home</a></li>
                        <li><a href="https://github.com/LogicFlaw-Labs/" class="text-white" target="_blank">LogicFlaw Labs</a></li>
                        <li><a href="{base}/hub" class="text-white">Community Hub</a></li>
                        <li><a href="{base}/support" class="text-white">Support</a></li>
                    </ul>
                </div>

                <div class="navbar-center hidden md:flex">
                    <ul class="flex px-1">
                        <li>
                            <a href="{base}/" class="animate mr-10 text-white">Home</a>
                        </li>
                        <li>
                            <a href="https://github.com/LogicFlaw-Labs/" class="animate mr-10 text-white" target="_blank"
                                >LogicFlaw Labs</a
                            >
                        </li>
                        <li>
                            <a href="{base}/hub" class="animate mr-10 text-white"
                                >Community Hub</a
                            >
                        </li>
                        <li>
                            <a
                                href="{base}/support"
                                class="animate mr-10 text-white">Support</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
