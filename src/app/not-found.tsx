'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen mx-auto flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Page Under Development</h1>

      <p className="text-gray-600 max-w-md mb-6">
        Hiện tại chúng tôi chỉ hoàn thiện giao diện Landing Page. Các trang khác sẽ được cập nhật
        trong thời gian sớm nhất. Cảm ơn bạn đã ghé thăm! ❤️
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-blue-header-btn hover:bg-blue-header-btn/80 text-white rounded-full transition"
      >
        Quay lại trang chủ
      </Link>
    </div>
  );
}
