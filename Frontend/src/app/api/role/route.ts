
import {NextResponse} from 'next/server';

export async function POST(req: Request) {
  try {
    const { role, level } = await req.json();
    
    // For now, we'll just log the role to the console.
    // In the future, this could be saved to a database or used to customize the user's experience.
    console.log('Received role:', role, 'level:', level);

    // You can add any server-side logic here

    return NextResponse.json({ message: 'Role received successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing role:', error);
    return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
  }
}
