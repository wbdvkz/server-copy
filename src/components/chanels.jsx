export default function Chanels() {
    return (
        <div class='bg-DSbg2 w-[300px] h-full flex flex-col  '>
            <input class='sr-only peer' type="checkbox" name="server" id="server" />

            <label class=' w-full h-12 hover:bg-gray-600 flex items-center peer-checked:bg-gray-600  ' htmlFor="server">

                <div class='ml-3'>Сервер</div>

                <div class='ml-32'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
            </label>

            <div class='invisible peer-checked:visible fixed top-[60px] bg-gray-900 w-54 left-[85px]  ' >
                <div class='hover:bg-blue-900 w-full flex flex-row'>


                    <div class='m-3 w-9/12 '>Буст сервера</div>

                    <div class='grid place-items-center'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-1-circle" viewBox="0 0 16 16">
                        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                    </svg></div>
                </div>


                <div class='h-1 w-11/12 m-auto bg-gray-800'></div>


                <div class='hover:bg-blue-900 w-full flex flex-row'>


                    <div class='m-3 w-9/12 text-blue-400'>Пригласить людей</div>

                    <div class='grid place-items-center'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-1-circle" viewBox="0 0 16 16">
                        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                    </svg></div>
                </div>

                <div class='hover:bg-blue-900 w-full flex flex-row'>


                    <div class='m-3 w-9/12 '>Настройки сервера</div>

                    <div class='grid place-items-center'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-1-circle" viewBox="0 0 16 16">
                        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                    </svg></div>
                </div>

                <div class='h-1 w-11/12 m-auto bg-gray-800'></div>


                <div class='hover:bg-blue-900 w-full flex flex-row'>


                    <div class='m-3 w-9/12 text-red-400'>Пожаловаться на рейд</div>

                    <div class='grid place-items-center'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-1-circle" viewBox="0 0 16 16">
                        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                    </svg></div>
                </div>

            </div>

            <div class='h-1 w-full bg-gray-800'></div>

            <input class='sr-only peer' type="checkbox" name="tekstchannel" id="tekstchannel" />

            <label class='flex flex-row hover:text-lime-50' htmlFor="tekstchannel">
                <svg class="arrow-2HswgU icon-3zI3d2" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path></svg>
                <div class='ml-1'>Текстовые каналы</div>
            </label>

            <div>
                <input class='sr-only peer' type="checkbox" name="obwee" id="obwee" />
                <label class=' ml-7 flex flex-row hover:text-lime-50
            peer-checked:bg-gray-400 w-40' htmlFor="obwee">
                    <svg width="24" height="24" viewBox="0 0 24 24" class="icon-2W8DHg" aria-hidden="true" role="img"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path></svg>
                    <div class='ml-1'>Общее</div>
                </label>

            </div>

            <div class='invisible peer-checked:visible ml-7 flex flex-row hover:text-lime-50' htmlFor="tekstchannel">
                <svg width="24" height="24" viewBox="0 0 24 24" class="icon-2W8DHg" aria-hidden="true" role="img"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path></svg>
                <div class='ml-1'>Клипы-и-тд</div>
            </div>

        </div>
    );
}
