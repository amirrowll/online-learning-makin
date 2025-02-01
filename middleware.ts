import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const requestHeaders = new Headers(request.headers)
    const pathname = request.nextUrl.pathname

    requestHeaders.set('x-pathname', pathname)

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    })
} 