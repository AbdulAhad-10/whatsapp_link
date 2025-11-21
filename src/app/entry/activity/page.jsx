// app/entry/activity/page.tsx
import { Metadata } from 'next';
import ShareButton from './ShareButton';


// Generate dynamic metadata for Open Graph
export async function generateMetadata({ searchParams }) {
  const wid = searchParams.wid || 'default';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com';
  
  // In a real app, you'd fetch activity details from your database here
  // const activity = await fetchActivity(wid);
  
  return {
    title: 'Amazing Activity - Join Us!',
    description: 'Check out this exciting activity and join the fun!',
    openGraph: {
      title: 'Amazing Activity - Join Us!',
      description: 'Check out this exciting activity and join the fun!',
      images: [
        {
          url: `${baseUrl}/preview-image.png`,
          width: 1200,
          height: 630,
          alt: 'Activity Preview',
        }
      ],
      url: `${baseUrl}/entry/activity?wid=${wid}`,
      type: 'website',
      siteName: 'Your App Name',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Amazing Activity - Join Us!',
      description: 'Check out this exciting activity and join the fun!',
      images: [`${baseUrl}/preview-image.png`],
    },
  };
}

export default function ActivityPage({ searchParams }) {
  const wid = searchParams.wid;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Activity Image */}
          <div className="aspect-video bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <div className="text-white text-center">
              <h1 className="text-4xl font-bold mb-2">Activity Preview</h1>
              <p className="text-lg">WID: {wid || 'No ID provided'}</p>
            </div>
          </div>

          {/* Activity Content */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Amazing Activity Title
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              This is your activity description. When you share this link on WhatsApp, 
              it will show a beautiful preview with an image, title, and description.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-700">
                <span className="mr-2">📅</span>
                <span>Date: January 15, 2025</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="mr-2">📍</span>
                <span>Location: Virtual Event</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="mr-2">👥</span>
                <span>20 participants</span>
              </div>
            </div>

            {/* Share Button */}
            <ShareButton />
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            📱 How to test the WhatsApp preview:
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-800">
            <li>Click the &apos;Share on WhatsApp&apos; button above</li>
            <li>Send the link to yourself or a friend</li>
            <li>Wait 2-3 seconds for the preview to load</li>
            <li>You&apos;ll see an image with title and description</li>
          </ol>
        </div>
      </div>
    </div>
  );
}