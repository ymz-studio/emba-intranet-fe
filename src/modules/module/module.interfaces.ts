export interface ModuleScheduleItem {
  name: string;
  slug: string;
  range: Date[];
}

export interface ModuleInfo {
  courses?: Course[];
  activities?: Activity[];
  hotel?: Hotel;
  name?: string;
  slug?: string;
}

export interface Course {
  id?: number;
  slug?: string;
  name?: string;
  range?: Date[];
  description?: string;
}

export interface Activity {
  id?: number;
  name?: string;
  range?: Date[];
  description?: string;
}

export interface Hotel {
  location?: string;
  range?: Date[];
  food?: string[];
}
