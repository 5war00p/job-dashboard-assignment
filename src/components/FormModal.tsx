import { Fragment, FC } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FormModalProps } from '@/utils/types'
import { FormRenderer } from './form/FormRenderer'

export const FormModal: FC<FormModalProps> = ({
  data,
  isOpened,
  onClose
}) => {
  return (
    <>
      <Transition appear show={isOpened} as={Fragment}>
        <Dialog 
          as="div" 
          className="relative z-10"
          onClose={onClose}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[577px] h-[564px] transform overflow-hidden rounded-[10px] bg-white p-8 text-left align-middle shadow-xl transition-all">
                  <FormRenderer onClose={onClose} data={data}/> 
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}