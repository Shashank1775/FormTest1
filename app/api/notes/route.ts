import { NextRequest, NextResponse } from 'next/server';
import mongooseConnect from '../../../lib/mongoose';
import NewNote from '../../../models/newnote';

export async function POST(request: NextRequest) {
    try {
        await mongooseConnect();
        const { name } = await request.json();
        const newNote = new NewNote({
            name
        });
        await newNote.save();
        return NextResponse.json({ success: true, note: newNote });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ success: false, error: error.message });
    }
}
