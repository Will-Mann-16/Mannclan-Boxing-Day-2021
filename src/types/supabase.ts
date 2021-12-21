/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/clues": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.clues.id"];
          updated_at?: parameters["rowFilter.clues.updated_at"];
          type?: parameters["rowFilter.clues.type"];
          metadata?: parameters["rowFilter.clues.metadata"];
          position?: parameters["rowFilter.clues.position"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["clues"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** clues */
          clues?: definitions["clues"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.clues.id"];
          updated_at?: parameters["rowFilter.clues.updated_at"];
          type?: parameters["rowFilter.clues.type"];
          metadata?: parameters["rowFilter.clues.metadata"];
          position?: parameters["rowFilter.clues.position"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.clues.id"];
          updated_at?: parameters["rowFilter.clues.updated_at"];
          type?: parameters["rowFilter.clues.type"];
          metadata?: parameters["rowFilter.clues.metadata"];
          position?: parameters["rowFilter.clues.position"];
        };
        body: {
          /** clues */
          clues?: definitions["clues"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/profiles": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          updated_at?: parameters["rowFilter.profiles.updated_at"];
          first_name?: parameters["rowFilter.profiles.first_name"];
          is_admin?: parameters["rowFilter.profiles.is_admin"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["profiles"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          updated_at?: parameters["rowFilter.profiles.updated_at"];
          first_name?: parameters["rowFilter.profiles.first_name"];
          is_admin?: parameters["rowFilter.profiles.is_admin"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          updated_at?: parameters["rowFilter.profiles.updated_at"];
          first_name?: parameters["rowFilter.profiles.first_name"];
          is_admin?: parameters["rowFilter.profiles.is_admin"];
        };
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  clues: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    updated_at?: string;
    type: string;
    metadata: string;
    position: number;
  };
  profiles: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    updated_at?: string;
    first_name?: string;
    is_admin: boolean;
  };
}

export interface parameters {
  /** Preference */
  preferParams: "params=single-object";
  /** Preference */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /** Preference */
  preferCount: "count=none";
  /** Filtering Columns */
  select: string;
  /** On Conflict */
  on_conflict: string;
  /** Ordering */
  order: string;
  /** Limiting and Pagination */
  range: string;
  /** Limiting and Pagination */
  rangeUnit: string;
  /** Limiting and Pagination */
  offset: string;
  /** Limiting and Pagination */
  limit: string;
  /** clues */
  "body.clues": definitions["clues"];
  "rowFilter.clues.id": string;
  "rowFilter.clues.updated_at": string;
  "rowFilter.clues.type": string;
  "rowFilter.clues.metadata": string;
  "rowFilter.clues.position": string;
  /** profiles */
  "body.profiles": definitions["profiles"];
  "rowFilter.profiles.id": string;
  "rowFilter.profiles.updated_at": string;
  "rowFilter.profiles.first_name": string;
  "rowFilter.profiles.is_admin": string;
}

export interface operations {}

export interface external {}