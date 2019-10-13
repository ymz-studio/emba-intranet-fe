export interface UnitItem {
  courses: CourseItem[];
  activities: ActivityItem[];
  hotel: Hotel;
  name: string;
  slug: string;
}

export interface CourseItem {
  name: string;
  range: string[];
}

export interface ActivityItem {
  name: string;
  range: string[];
  description: string;
  id: number;
  slug?: string;
}

export interface Hotel {
  location: string;
  range: string[];
  food: string[];
}
