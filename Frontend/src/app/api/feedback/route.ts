
import {NextResponse} from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // For now, we'll just log the feedback to the console.
    // In a real application, you would save this to a database,
    // send an email, or create a ticket in a support system.
    console.log('New Feedback Received:', body);

    return NextResponse.json({ message: 'Feedback received successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing feedback:', error);
    return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
  }
}
