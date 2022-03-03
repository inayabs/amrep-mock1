import { LockClosedIcon } from '@heroicons/react/solid'
import Layout from '../components/layouts/landing'
import Image from 'next/image'
export default function Auth() {
  return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAADQCAMAAABx9g5nAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA+VBMVEX///9HUJ1HUJ1HUJ1H UJ1HUJ3vQzPvQzNHUJ1HUJ3vsTTvsTTvsTTvsTRHUJ3vsTTvsTTvsTRHUJ3vQzNHUJ3vQzPvsTTv sTRHUJ3vsTRHUJ3vsTRHUJ3vQzPvQzPvQzNHUJ3vQzPvQzPvQzNHUJ2HRJuHRJuHRJuHRJvvQzOH RJuHRJvvsTTvsTRoxsZoxsZoxsbvsTRoxsYAAADMHkPMHkPMHkPMHkPMHkPMHkPMHkMAAAAAAAAA AADMHkPMHkPMHkPMHkNoxsZoxsbMHkPMHkNoxsZoxsZoxsZoxsbMHkNHUJ3vQzPvsTSHRJtoxsYA AADMHkP///8PKC3dAAAAS3RSTlMAEGCg0LBgQCDw4MCAQHDwkCDA8IAw0DBQEOCgMCDQEJCwoJBA MEDAYIBwoLBgYDBAUPDAMHBA8IBgoGCAkBDQ4FAQ0LDAwIAgUCBBI3xiAAAAAWJLR0QAiAUdSAAA AAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+YCGgAPMZ/rqlEAAAVVSURBVHja7dxpd9Q2FIBh JYGyJDQEaFjK2hUoJJQkkLCkEEqhuO50/v+f6Yw9EzyybN1F0r2eo/fbfNHJc2yPZcUaY3K5XC6X y+Vy0q2srp0psJ015pt/AnUuEOT82gW0Y9paOEtFKfu6uL6+cckn+ZYGCWrxU6o2L2/1nVtXqJDa cu5qQsoEs9EtwV8jza4Z810IC5hSlttbUSRFsRrGgqCUm9edlLNMSSgLhuK23GBLAllQlPLizTbl VgBKcSOABUcpv29JVkNIigu3+RYkpWzdYbjXfMNy525Syrp9lw8jqS33WBYspdyKcX4FsaAp1p3y fjBKcWaFZ0FTrDOMM2UJbEFTyngUpgVP2YpH4VnwlEsRKdNHMXPvwVJQplN+Y35YCgrDoo5Ct+ij FPeJFoWU6ZSfYtFIIVpUUmrLj0tBqS3IRSWllOk0GWtRSqFYtFIIFrUUvEUvpbi1grMoplRTfoRF M2VmgS4qqabgLLopxRUDtyin1FN+mEU7BWFRT4Fb9FPqRzGAZQCUeprsXxwfAmVm8S2QDYICswyD ArIMhFJPk/stA6FALFzK7Z8Sdd74LFxK8roXxwdH6V4gGyCly8Kl/PxLmAJYuJRf/w3SwwDHRQcF KXFbVFDQEqdFA4UgMeaRRgpJ4lhUkqcQJW2LOIUsaVmkKQyJbRGmsCSWRZbClCxaRClsycRyVQXl MV/SXFQSpPwWQtKwyFECSb5axCjBJKcWNOXJ4lvTVEpAydyCpdjvTBMpQSUzC/ftbxolsKS24Cjt 99hJlOCSalEJRXHsxqFQIkimFgzlqWMEAiWKZGK5A6fUkp1dJiWSZBZCsjt6xqPElUAom7/XkudM SmQJZDPh9bmER4kt8VMaEhYlusRLaUo4lPgSH2W7KWFQEkg8lO2bTQmdkkJiMBIyJYnEYCRUCkiy 91+jPfsjk/LElhApsGMSkzKbCjckNArw7IpIcUhIlFqyfyBHcUkolFry4uWhGGXDJSFQasnReCxG eeqU4CmnEjFKhwRN+SqRonRJsJSGRIYyezxxSJCUpkSEMv/lBocER1mQSFD6JChKLXk1FqP0SjAU S5Kest0rQVBsiZ/y+k2j1/ZHNGU2Fe6SwCktiZ/CDyMBU9oSP+XtXqO39kckxSuBUhyStNfKulcC pFSS4z/GYpT5Sn2PBEZxSlJSIBIQxS1JSAFJIJQOSTrKZZAEQOmSJKPM/3vikfgpnZJUFKjES6kk ++/GYhSwxEepJS/HUpRNuMRD6ZOkoJz+sBxA0k/plaSgYCS9lH5JCgpG0kfxSFJMJzGSHkoled8t STHJx0i6KZXkaDwWp0AlnRS/JBEFLOmiACRpKHBJBwUiSUJBSNwUkCQFBSNxUirJoU+SgIKSuCiV 5JVXEp+CkzgoUEl0yskHlKRNAUtiU7CSFgUuiUxBS2wKQhKXgpdYlOkOgWOgJCqFILEopuMxPjWF ImlR4JKIFJLEpiAk8Sg0iUXBSKJRiJLRycIofyIksShUyWhxmI/yFLLkL20UsmT0SRmFLhl91kVh SKzzS5rCkLRukLIUjsQ+KLIUjuT5Z3s0SQpHMtppDSdICSwRpISWyFE4kg+7rhGlKJz7yY57SCnK 35+IPTvpGlL6bh+wTNFYpmgsUzSWKRrLFI1lisYyRWOZorFM0VimaCxTNJYpGssUjWWKxjJFY5mi sUzR2BJRoO/lDoBysDyU/eWhmHfLQ/FvwBkM5cvyUDCHRTvlGH61aKf0bRoeGsW/iXA4FHMEPC4D oJh92H6JIVAm32OQAzMMijk+8B+ZgVAmfXl/2N8L6b8wl8vl6v4HGIdSAm7cCSgAAAAldEVYdGRh dGU6Y3JlYXRlADIwMjItMDItMjZUMDA6MTU6NDkrMDA6MDDnoA8NAAAAJXRFWHRkYXRlOm1vZGlm eQAyMDIyLTAyLTI2VDAwOjE1OjQ5KzAwOjAwlv23sQAAAABJRU5ErkJggg=="
                alt="Workflow"
                width="100%" height="100%" layout="responsive" 
              />
              {/* <div style={{position:'relative'}}>
                <Image
                    className="mx-auto h-12 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                    objectFit="contain"
                    layout="fill"
                /> */}
              {/* </div> */}
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Or{' '}
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  start your 14-day free trial
                </a>
              </p>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>
  
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
  
                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                  </span>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
  )
}
