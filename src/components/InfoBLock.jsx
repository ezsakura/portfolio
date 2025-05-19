import React from 'react'
import { Info } from '../utils/utils'
const InfoBLock = () => {
    const [{ email }, { number }, { adres }] = Info;

  return (
    <div className="w-full md:w-1/3 bg-white shadow-lg rounded-2xl p-8 mt-6 md:mt-0">
          <h2 className="text-xl font-bold border-b pb-2 mb-4">Связь со мной</h2>
          <p className="text-gray-600">
            Если у вас есть вопросы, вы можете связаться с нами напрямую:
          </p>
         <ul className="space-y-2">
      {/* Email: переносим строку и разрешаем перенос длинных слов */}
      <li className="flex flex-col sm:flex-row sm:items-center overflow-y-auto">
        <strong className="mr-2">Email:</strong>
        <span className="block break-words whitespace-normal">
          {email}
        </span>
      </li>

      {/* Телефон и адрес по аналогии */}
      <li className="flex flex-col sm:flex-row sm:items-center overflow-y-auto">
        <strong className="mr-2">Телефон:</strong>
        <span className="block">{number}</span>
      </li>
      <li className="flex flex-col sm:flex-row sm:items-center overflow-y-auto">
        <strong className="mr-2">Адрес:</strong>
        <span className="block">{adres}</span>
      </li>
    </ul>
          <p className="text-gray-600">
            Мы ответим вам в течение 24 часов.
          </p>
        </div>
  )
}

export default InfoBLock