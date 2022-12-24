import { Lesson as ILessonProps } from "@internals/types";

interface ICourseProps {
    _id: string;
    title: string;
    description: string;
    instructor: {
        _id: string;
        firstName: string;
        lastName: string;
    } | null;
    averageRating: number;
    totalHours: number;
    price: number;
    activePromotion: {
        name: string;
        discountPercent: number;
        startDate: Date;
        endDate: Date;
    } | null;
    currency: string;
    lessons: ILessonProps[];
    preview: string;
    thumbnail: string;
    subject?: string;
}

export default ICourseProps;
