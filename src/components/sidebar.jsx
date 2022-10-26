


export default function Sidebar() {


    return (
        <div class='w-20 h-full flex flex-col items-center'>






            <div class='h-1 my-2 w-8'></div>

            <div class=' flex justify-between w-20'>
                <input class='sr-only peer' type='radio' id='radio1' value='radio1' name='radioGroup' ></input>

                <div class='h-12 w-2 rounded-r-lg peer-hover:bg-gray-200 peer-hover:h-6 peer-checked:peer-hover:h-12 peer-hover:my-auto peer-checked:bg-gray-200   '></div>


                <label class='grid place-content-center bg-DScircle rounded-full w-12 h-12 hover:rounded-2xl hover:bg-blue-700
                peer-checked:rounded-2xl peer-checked:bg-blue-700' for='radio1'>


                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="fill-gray-200  bi bi-discord" viewBox="0 0 16 16">
                        <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                    </svg>
                </label>

                <div class=' h-12 w-2'></div>

                <div class='invisible peer-hover:visible fixed left-20 top-0 flex flex-col'>
                    <div class='h-1 my-2 w-8 block'></div>
                    <div class='h-12 grid place-items-center'>
                        <div class=' bg-black p-1 px-3 rounded-lg '> Личные сообщения</div>
                    </div>

                </div>


            </div>









            <div class='h-1 my-4 bg-DScircle w-8'></div>

            <div class=' flex justify-between w-20'>
                <input class='sr-only peer' type='radio' id='radio5' value='radio5' name='radioGroup' ></input>

                <div class='h-12 w-2 rounded-r-lg peer-hover:bg-gray-200 peer-hover:h-6 peer-checked:peer-hover:h-12 peer-hover:my-auto peer-checked:bg-gray-200   '></div>


                <label class='grid place-content-center bg-DScircle rounded-full w-12 h-12 hover:rounded-2xl hover:bg-blue-700
                peer-checked:rounded-2xl peer-checked:bg-blue-700' for='radio5'>


                    <div class='text-xs'>Сервер</div>
                </label>

                <div class=' h-12 w-2'></div>

                <div class='invisible peer-hover:visible fixed left-20 top-[83px] flex flex-col'>
                    <div class='h-1 my-2 w-8 block'></div>
                    <div class='h-12 grid place-items-center'>
                        <div class=' bg-black p-1 px-3 rounded-lg '> Сервер</div>
                    </div>

                </div>


            </div>


            <div class='h-1 my-2 w-8'></div>

            <div class=' flex justify-between w-20'>
                <input class='sr-only peer' type='radio' id='radio2' value='radio2' name='radioGroup' ></input>

                <div class='h-12 w-2 rounded-r-lg peer-hover:bg-gray-200 peer-hover:h-6 peer-checked:peer-hover:h-12 peer-hover:my-auto peer-checked:bg-gray-200   '></div>


                <label class='grid place-content-center bg-DScircle rounded-full w-12 h-12 hover:rounded-2xl hover:bg-DSselected' for='radio2'>


                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="fill-gray-200 bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                    </svg>
                </label>

                <div class=' h-12 w-2'></div>


                <div class='invisible peer-hover:visible fixed left-20 top-[152px] flex flex-col'>
                    <div class='h-1 my-2 w-8 block'></div>
                    <div class='h-12 grid place-items-center'>
                        <div class=' bg-black p-1 px-3 rounded-lg '> Добавить сервер</div>
                    </div>



                </div>

                <div class='fixed top-[140px] left-12'>

                    <div class="f-modal-alert">
                        <div class="f-modal-icon f-modal-warning scaleWarning">
                            <span class="f-modal-body pulseWarningIns"></span>
                            <span class="f-modal-dot pulseWarningIns"></span>
                        </div>

                    </div>

                </div>

            </div>


            <div class='h-1 my-2 w-8'></div>

            <div class=' flex justify-between w-20'>
                <input class='sr-only peer' type='radio' id='radio3' value='radio3' name='radioGroup' ></input>

                <div class='h-12 w-2 rounded-r-lg peer-hover:bg-gray-200 peer-hover:h-6 peer-checked:peer-hover:h-12 peer-hover:my-auto peer-checked:bg-gray-200   '></div>


                <label class='grid place-content-center bg-DScircle rounded-full w-12 h-12 hover:rounded-2xl hover:bg-DSselected' for='radio3'>


                    <svg aria-hidden="true" role="img" class="circleIcon-3489FI" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"></path></svg>
                </label>

                <div class=' h-12 w-2'></div>


                <div class='invisible peer-hover:visible fixed left-20 top-[220px] flex flex-col'>
                    <div class='h-1 my-2 w-8 block'></div>
                    <div class='h-12 grid place-items-center'>
                        <div class=' bg-black p-1 px-3 rounded-lg '> Исследуйте публичные сервера</div>
                    </div>

                </div>
            </div>

            <div class='h-1 my-4 bg-DScircle w-8'></div>

            <div class=' flex justify-between w-20'>
                <input class='sr-only peer' type='radio' id='radio4' value='radio4' name='radioGroup' ></input>

                <div class='h-12 w-2 rounded-r-lg peer-hover:bg-gray-200 peer-hover:h-6 peer-checked:peer-hover:h-12 peer-hover:my-auto peer-checked:bg-gray-200   '></div>


                <label class='grid place-content-center bg-DScircle rounded-full w-12 h-12 hover:rounded-2xl hover:bg-DSselected' for='radio4'>


                    <svg class="circleIcon-3489FI" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 20V18H6V20H18Z"></path></svg>
                </label>

                <div class=' h-12 w-2'></div>


                <div class='invisible peer-hover:visible fixed left-20 top-[303px] flex flex-col'>
                    <div class='h-1 my-2 w-8 block'></div>
                    <div class='h-12 grid place-items-center'>
                        <div class=' bg-black p-1 px-3 rounded-lg '>Загрузить приложение</div>
                    </div>

                </div>
            </div>

        </div>
    );
}